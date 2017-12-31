import React from 'react';
import { Redirect } from 'react-router-dom';
import isAuthenticated from '../Auth/isAuthenticated';

const Private = (props) => (
  isAuthenticated() ? (
    <div>
      <h2>Private Page</h2>
      <p>Hey, you’re logged in!</p>
    </div>
  ) : (
    <Redirect to={{
      pathname: '/login',
      state: { from: props.location }
    }} />
  )
)

export default Private;