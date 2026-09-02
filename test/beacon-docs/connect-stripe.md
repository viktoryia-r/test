# connect stripe

The Stripe connector imports charges, subscriptions, invoices, and customers.

## Steps

{% stepper %}
{% step %}
## Open Stripe

Open **Sources → Add source → Stripe**.
{% endstep %}

{% step %}
## Authorise Beacon

Click **Connect with Stripe** and authorise Beacon in the Stripe dialog.
{% endstep %}

{% step %}
## Choose objects

Choose which objects to import. Charges and subscriptions are selected by default.
{% endstep %}

{% step %}
## Connect

Click **Connect**.

The first import can take up to an hour for accounts with a large history. After that, Beacon receives Stripe events in real time.
{% endstep %}
{% endstepper %}

## Test mode

To import test-mode data, connect a Stripe account while it is in test mode. Beacon keeps live and test data in separate sources.
