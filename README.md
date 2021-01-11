# Demo Backstage application with Auth providers

Auth0 auth provider demo.

Set environment variables:
* AUTH_AUTH0_CLIENT_ID
* AUTH_AUTH0_CLIENT_SECRET
* AUTH_AUTH0_DOMAIN_ID

from the app set up in your Auth0 account.

Use `http://localhost:7000/api/auth/auth0/handler/frame` as callback URL.



Creating an app in Auth0 console:
![Creating an app in Auth0 console](docs/static/auth0_creating_App.png)


URL configuration for callback:
![URL configuration for callback](docs/static/auth0_urls.png)



ID/secret locations to add to environment variables:
![Id locations to add to environment variables](docs/static/auth0_ids.png)

See more documentation in Backstage documentation page in: https://backstage.io/docs/tutorials/quickstart-app-auth
