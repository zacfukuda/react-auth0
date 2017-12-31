import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {

  constructor(props) {
    super(props);
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  render() {
    return (
      <Redirect to={{
        pathname: '/login',
        state: { from: this.props.location }
      }} />
    );
  }
}

export default Logout;