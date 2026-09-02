# self hosting

Beacon can run on your own infrastructure with Docker. Self-hosted Beacon has the same features as the cloud version, except for the Stripe connector.

## Requirements

* Docker 24 or newer and Docker Compose.
* 2 CPU cores and 4 GB of memory.
* A PostgreSQL 14 database for Beacon's own data.
* A domain name pointing to the server.

## Install

{% stepper %}
{% step %}
### Download the compose file

```bash
curl -O https://get.beacon.example/docker-compose.yml
```
{% endstep %}

{% step %}
### Create the environment file

Create a `.env` file with your database URL and a random `SECRET_KEY`.
{% endstep %}

{% step %}
### Start the services

```bash
docker compose up -d
```
{% endstep %}

{% step %}
### Create the first admin user

Open `https://your-domain` and create the first admin user.
{% endstep %}
{% endstepper %}

{% hint style="warning" %}
Beacon must be served over HTTPS in production. Connectors that use OAuth, such as Google Sheets, will not complete the sign-in flow over plain HTTP.
{% endhint %}

## Backups

Back up the Beacon database with `pg_dump` and the `uploads` volume. Restoring both brings back the complete instance.
