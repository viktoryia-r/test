# connect postgresql

Beacon can query a PostgreSQL database directly. Beacon only ever runs `SELECT` statements against your database.

## Requirements

* PostgreSQL 12 or newer.
* A database user with read access to the tables you want to use.
* The database must be reachable from Beacon's servers. Allow inbound connections from `34.120.0.0/16` in your firewall.

## Steps

{% stepper %}
{% step %}
## Open PostgreSQL source setup

Open **Sources → Add source → PostgreSQL**.
{% endstep %}

{% step %}
## Enter connection details

Enter the host, port, database name, user, and password.
{% endstep %}

{% step %}
## Configure SSL

Turn on **Use SSL** if your database requires it.
{% endstep %}

{% step %}
## Test and save

Click **Test connection**, then **Save**.
{% endstep %}
{% endstepper %}

## Choosing tables

After saving, Beacon lists every table the user can read. Select the ones you want to use in dashboards. You can also add a custom SQL query as a virtual table.

## Sync frequency

PostgreSQL sources are queried live when a dashboard opens. Results are cached for five minutes.
