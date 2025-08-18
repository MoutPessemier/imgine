variable "project_id" {
  type        = string
  description = "The project id to deploy the resources to"
  default     = "dotted-stage-469318-h2"
}

variable "region" {
  type        = string
  description = "The region to deploy the resources to"
  default     = "europe-west1"
}

variable "postgres_username" {
  type        = string
  description = "The username for the postgres database"
  sensitive   = true
}

variable "postgres_password" {
  type        = string
  description = "The password for the postgres database"
  sensitive   = true
}

variable "payload_secret" {
  type        = string
  description = "Secret key for Payload CMS"
  sensitive   = true
}