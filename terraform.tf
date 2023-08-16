variable "domain_name" {
  type = string
}

variable "certificate_arn" {
  type = string
}

provider "aws" {
  region = "us-east-1"
}

terraform {
  backend "s3" {
    bucket = "hedberg-terraform-states"
    key    = "hantlangare.se"
    region = "eu-north-1"
  }
}

module "website" {
  source          = "./.deploy/terraform/"
  domain_name     = var.domain_name
  certificate_arn = var.certificate_arn
}
