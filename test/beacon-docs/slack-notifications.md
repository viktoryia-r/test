# slack notifications

Connect Slack to receive scheduled reports and alerts in a channel.

## Connect Slack

{% stepper %}
{% step %}
### Open Slack integration settings

Open **Settings → Integrations → Slack**.
{% endstep %}

{% step %}
### Add Slack

Click **Add to Slack** and approve the permissions.
{% endstep %}

{% step %}
### Choose a default channel

Choose a default channel for alerts.
{% endstep %}
{% endstepper %}

## Sending to private channels

Beacon can only post to private channels it has been invited to. In Slack, open the channel and run `/invite @Beacon`.

## Disconnecting

Open **Settings → Integrations → Slack** and click **Disconnect**. Scheduled reports that used Slack are paused, not deleted.
