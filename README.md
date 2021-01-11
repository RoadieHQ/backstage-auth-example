# Demo Backstage application with Auth providers

Gitlab auth provider demo.

Set environment variables:
* AUTH_GITLAB_CLIENT_ID
* AUTH_GITLAB_CLIENT_SECRET

from the app set up in your Gitlab OAuth applications.

Use `http://localhost:7000/api/auth/gitlab/handler/frame` as callback URL.
Expose the following scopes:

* read_user (Read the authenticated user's personal information)
* read_repository (Allows read-only access to the repository)
* write_repository (Allows read-write access to the repository)
* openid (Authenticate using OpenID Connect)
* profile (Allows read-only access to the user's personal information using OpenID Connect)
* email (Allows read-only access to the user's primary email address using OpenID Connect)



See more documentation in Backstage documentation page in: https://backstage.io/docs/tutorials/quickstart-app-auth
