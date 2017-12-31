import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Lock from './Lock';
import isAuthenticated from './isAuthenticated';

class Login extends Component {
	
	render() {
		return(
			isAuthenticated() ? (
				<Redirect to={{
					pathname: '/private',
	        state: { from: this.props.location }
				}} />
			) : (
				<Lock location={this.props.location} />
			)
		);
	}
}

export default Login;