# release notes

{% updates format="full" %}
{% update date="2026-03-01" %}
## March 2026

* **Team workspaces.** Admins can now create multiple workspaces under one account and switch between them from the top-left menu.
* **Audit log.** Every change to sources, members, and API keys is now recorded. Admins can browse the log from Settings.
* Stripe connector now imports refunds.
{% endupdate %}

{% update date="2026-02-01" %}
## February 2026

* New **table** tile type for dashboards.
* PostgreSQL sources can now use SSL client certificates.
* Fixed an issue where scheduled reports were sent twice on the first day of the month.
{% endupdate %}

{% update date="2026-01-01" %}
## January 2026

* Webhook alerts now include the `X-Beacon-Signature` header.
* Read-only share links now expire after 30 days.
{% endupdate %}
{% endupdates %}
