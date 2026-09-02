# troubleshooting

## A Google Sheets source shows no data

* Check that the sheet has a header row. Columns without a header are skipped.
* Make sure the connected Google account still has access to the sheet.
* If the sheet has more than 10,000 rows, only the first 10,000 are imported.

## Dashboard tiles show "Source unavailable"

The source could not be refreshed. Open **Sources**, find the source, and click **Test connection**. For PostgreSQL, confirm that Beacon's IP range is allowed by your firewall.

## A webhook was not delivered

Open the alert's **Deliveries** tab. Each attempt shows the response code. Beacon retries failed deliveries up to 5 times; after that the alert is marked as failed until the next trigger.

## Scheduled report arrived at the wrong time

Schedules use the workspace time zone, not the recipient's. Change it from **Settings → General**.

## Still stuck?

Email support@beacon.example with your workspace name and the time the problem happened.
