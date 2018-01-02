# React Authentication with Auth0 & Lock

The example of React Authenticaion app with Auth0’s Lock.<br>
The login/signup forms are embedded in `/login` page.

The official tutorial is available at https://www.mokuji.me/article/react-auth0.

## Run
In order to run this sample app. first you need to create an [Auth0](https://auth0.com/) account and Auth0 client. Plus, you must add `http://localhost:3000/login` to the Allowed Callback URLs, and `http://localhost:3000` to the Allowed Web Origins on your Auth0 client setting. 

After set up your Auth0 account, copy the repository and install dependencies:
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
- [Lock 11 for Web](https://auth0.com/docs/libraries/lock/v11)
- [Lock Configuration Options](https://auth0.com/docs/libraries/lock/v11/configuration)
- [auth0/lock](https://github.com/auth0/lock) (Github)