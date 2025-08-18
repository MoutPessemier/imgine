# Required APIs
resource "google_project_service" "required_apis" {
  for_each = toset([
    "run.googleapis.com",
    "sqladmin.googleapis.com",
    "cloudresourcemanager.googleapis.com",
    "artifactregistry.googleapis.com",
    "secretmanager.googleapis.com",
    "iam.googleapis.com",
    "logging.googleapis.com",
    "monitoring.googleapis.com"
  ])

  project = var.project_id
  service = each.value

  disable_dependent_services = true
  disable_on_destroy         = false
}

# Artifact Registry
resource "google_artifact_registry_repository" "case_imgine_repo" {
  format        = "DOCKER"
  location      = var.region
  repository_id = "case-imgine-repo"
}

data "google_artifact_registry_docker_image" "case_imgine_image" {
  location      = google_artifact_registry_repository.case_imgine_repo.location
  repository_id = google_artifact_registry_repository.case_imgine_repo.repository_id
  image_name    = "case-imgine-image:latest"
}

resource "google_service_account" "cloud_run_service_account" {
  account_id   = "cloud-run-sa"
  display_name = "Cloud Run Service Account"
  description  = "Service account for Cloud Run"
  project      = var.project_id
}

resource "google_project_iam_binding" "cloud_run_service_account_binding" {
  project = var.project_id
  for_each = toset([
    "roles/run.invoker",
    "roles/secretmanager.secretAccessor",
    "roles/logging.logWriter",
    "roles/monitoring.metricWriter"
  ])

  role = each.value
  members = [
    "serviceAccount:${google_service_account.cloud_run_service_account.email}"
  ]
}


resource "google_cloud_run_v2_service" "cloud_run_service" {
  name                = "imgine-app"
  location            = var.region
  deletion_protection = false

  template {
    service_account = google_service_account.cloud_run_service_account.email

    scaling {
      min_instance_count = 1
      max_instance_count = 1
    }

    containers {
      image = data.google_artifact_registry_docker_image.case_imgine_image.self_link

      ports {
        container_port = 3000
      }

      env {
        name = "DATABASE_URL"

        value_source {
          secret_key_ref {
            secret  = google_secret_manager_secret.database_connection_string.id
            version = "latest"
          }
        }
      }

      env {
        name = "PAYLOAD_SECRET"
        value_source {
          secret_key_ref {
            secret  = google_secret_manager_secret.payload_secret.id
            version = "latest"
          }
        }
      }
    }
  }
}
