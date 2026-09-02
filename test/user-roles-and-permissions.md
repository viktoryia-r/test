# user roles and permissions

Every member of a workspace has one role.

| Role   | Can view dashboards | Can edit dashboards | Can manage sources | Can manage members and billing |
| ------ | ------------------- | ------------------- | ------------------ | ------------------------------ |
| Viewer | Yes                 | No                  | No                 | No                             |
| Editor | Yes                 | Yes                 | Yes                | No                             |
| Admin  | Yes                 | Yes                 | Yes                | Yes                            |

## Managing members

{% stepper %}
{% step %}
### Invite members

Admins can invite members from **Settings → Members**. Invitations expire after 7 days.
{% endstep %}

{% step %}
### Change a role

Open **Settings → Members**, find the person, and pick a new role from the dropdown. The change applies immediately.
{% endstep %}

{% step %}
### Remove a member

Removing a member does not delete the dashboards or sources they created. Ownership passes to the admin who removed them.
{% endstep %}
{% endstepper %}
