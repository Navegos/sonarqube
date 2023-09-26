CREATE TABLE "GITHUB_PERMS_MAPPING"(
    "UUID" CHARACTER VARYING(40) NOT NULL,
    "GITHUB_ROLE" CHARACTER VARYING(100) NOT NULL,
    "SONARQUBE_PERMISSION" CHARACTER VARYING(64) NOT NULL
);
ALTER TABLE "GITHUB_PERMS_MAPPING" ADD CONSTRAINT "PK_GITHUB_PERMS_MAPPING" PRIMARY KEY("UUID");