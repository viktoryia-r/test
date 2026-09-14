# connect google sheets

Beacon reads a Google Sheet directly and refreshes it on a schedule. Each sheet tab becomes a table in Beacon.

## Before you begin

* You need **Editor** or **Admin** role in your Beacon workspace.
* The sheet must have a header row. Columns without a header are skipped.
* The Google account you connect needs at least **Viewer** access to the sheet.

## Steps

{% stepper %}
{% step %}
### Open Google Sheets sources

Open **Sources → Add source → Google Sheets**.
{% endstep %}

{% step %}
### Sign in

Click **Sign in with Google** and choose the account that has access to the sheet.
{% endstep %}

{% step %}
### Fetch sheet tabs

Paste the URL of the sheet and click **Fetch tabs**.
{% endstep %}

{% step %}
### Connect selected tabs

Select the tabs you want to import and click **Connect**.
{% endstep %}
{% endstepper %}

Beacon fetches the first 10,000 rows of each tab. Larger sheets are truncated.

## Refresh schedule

By default Beacon refreshes Google Sheets every 15 minutes. You can change this from the source settings page to hourly or daily.

## Supported data types

Beacon detects numbers, dates, booleans, and text automatically. Dates must be in ISO format (`2026-03-14`) or a format Google Sheets recognises as a date.
