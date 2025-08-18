resource "google_sql_database_instance" "case_imgine_db" {
  name             = "case-imgine-db"
  database_version = "POSTGRES_15"
  region           = var.region

  settings {
    tier = "db-f1-micro"

    ip_configuration {
      ipv4_enabled = true

      authorized_networks {
        value = "0.0.0.0/0"
        name  = "allow-all"
      }
    }
  }
}

resource "google_sql_user" "case_imgine_user" {
  name     = var.postgres_username
  instance = google_sql_database_instance.case_imgine_db.name
  password = var.postgres_password
}

resource "google_sql_database" "case_imgine_db" {
  name     = "case-imgine-db"
  instance = google_sql_database_instance.case_imgine_db.name
}