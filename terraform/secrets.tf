resource "google_secret_manager_secret" "database_username" {
  secret_id = "case-imgine-database-username"
  replication {
    user_managed {
      replicas {
        location = var.region
      }
    }
  }
}

resource "google_secret_manager_secret_version" "database_username_version" {
  secret      = google_secret_manager_secret.database_username.id
  secret_data = var.postgres_username
}

resource "google_secret_manager_secret" "database_password" {
  secret_id = "case-imgine-database-password"
  replication {
    user_managed {
      replicas {
        location = var.region
      }
    }
  }
}

resource "google_secret_manager_secret_version" "database_password_version" {
  secret      = google_secret_manager_secret.database_password.id
  secret_data = var.postgres_password
}

resource "google_secret_manager_secret" "database_connection_string" {
  secret_id = "case-imgine-database-connection-string"
  replication {
    user_managed {
      replicas {
        location = var.region
      }
    }
  }
}

resource "google_secret_manager_secret_version" "database_connection_string_version" {
  secret      = google_secret_manager_secret.database_connection_string.id
  secret_data = "postgres://${var.postgres_username}:${var.postgres_password}@${google_sql_database_instance.case_imgine_db.public_ip_address}:5432/${google_sql_database.case_imgine_db.name}"
}

resource "google_secret_manager_secret" "payload_secret" {
  secret_id = "case-imgine-payload-secret"
  replication {
    user_managed {
      replicas {
        location = var.region
      }
    }
  }
}

resource "google_secret_manager_secret_version" "payload_secret_version" {
  secret      = google_secret_manager_secret.payload_secret.id
  secret_data = var.payload_secret
}