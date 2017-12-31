import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import isAuthenticated from '../Auth/isAuthenticated';

class Private extends Component {
	render() {
		return(
			isAuthenticated() ? (
				<div>
					<h2>Private Page</h2>
					<p>Hi, you’re logged in!</p>
				</div>
			) : (
				<Redirect to={{
          pathname: '/login',
          state: { from: this.props.location }
        }} />
			)
		);
	}
}

export default Private;