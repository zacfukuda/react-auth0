# React Athentication with Auth0 & Lock

The example of React Athenticaion app with Auth0 & Lock.<br>
The login/signup forms are embedded in `/login` page.

## Run
In order to run this sample app. first you need to create an [Auth0](https://auth0.com/) account and and Auth0 client.

Copy the repository and install dependencies:
```bash
$ git clone https://github.com/zacfukuda/react-auth0.git
$ cd react-auth0
$ yarn
```

Then create `src/Auth/auth0-variables.js`, which defines variables for Auth0 client.

```bash
$ touch src/Auth/auth0-variables.js
```

The inside of `auth0-variables.js` looks like this:
```javascript
export const AUTH_CONFIG = {
  domain: 'yourdomain.auth0.com',
  clientId: 'yourclientid',
  callbackUrl: 'http://localhost:3000/callback',
  container: 'auth0-login-container'
}
```

And Finally,
```bash
$ yarn start
```

## Resources
- [React Login](https://auth0.com/docs/quickstart/spa/react/01-login) by Auth0
- [Auth0 Lock](https://auth0.com/lock)
- [Lock Configuration Options](https://auth0.com/docs/libraries/lock/v11/configuration)
- [Lock 11 for Web](https://auth0.com/docs/libraries/lock/v11)
- [auth0/lock](https://github.com/auth0/lock)