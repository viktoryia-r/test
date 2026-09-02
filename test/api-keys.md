# api keys

Use an API key to push data into Beacon or to read dashboard data from your own scripts.

## Create a key

{% stepper %}
{% step %}
## Open API key settings

Open **Settings → API keys**.
{% endstep %}

{% step %}
## Create and configure the key

Click **New key**, give it a name, and choose a scope: **Read**, **Write**, or **Read & write**.
{% endstep %}

{% step %}
## Copy the key

Copy the key. Beacon shows it only once.
{% endstep %}
{% endstepper %}

## Use a key

Send the key in the `Authorization` header:

```bash
curl https://api.beacon.example/v1/dashboards \
  -H "Authorization: Bearer bcn_live_xxxxxxxx"
```

## Limits

Each workspace can have up to 20 active keys. Requests are rate limited; if you receive a `429` response, wait and retry.

## Revoke a key

Open **Settings → API keys**, find the key, and click **Revoke**. Revoked keys stop working immediately.
