# webhooks

Webhooks let Beacon call your URL when a metric crosses a threshold you define.

## Create a webhook

{% stepper %}
{% step %}
## Open the alert settings

Open a dashboard tile and click **Alerts → Add alert**.
{% endstep %}

{% step %}
## Set the condition

Set the condition, for example `Signups today < 50`.
{% endstep %}

{% step %}
## Configure the webhook

Choose **Webhook** as the action and enter the URL.
{% endstep %}

{% step %}
## Save the alert

Click **Save**.
{% endstep %}
{% endstepper %}

Beacon sends a `POST` request with a JSON body:

```json
{
  "alert": "Signups today",
  "condition": "< 50",
  "value": 42,
  "triggered_at": "2026-03-14T09:00:00Z"
}
```

## Requirements

The endpoint must respond with a `2xx` status within 10 seconds. If it doesn't, Beacon retries the delivery up to 3 times with a one-minute delay.

## Verifying requests

Every request includes an `X-Beacon-Signature` header. Compare it with an HMAC-SHA256 of the request body using your webhook secret, which you can find on the alert's settings page.
