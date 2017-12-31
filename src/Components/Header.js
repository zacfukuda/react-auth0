import React from 'react';
import { Link } from 'react-router-dom';
import isAuthenticated from '../Auth/isAuthenticated';

const Header = () => (
  <header>
    <h1>React Auth0 App</h1>
    <nav>
      <ul>
        <li><Link to='/'>Top</Link></li>
        <li><Link to='/private'>Private</Link></li>
        {
          !isAuthenticated() && (
            <li><Link to='/login'>Login</Link></li>
          )
        }
        {
          isAuthenticated() && (
            <li><Link to='/logout'>Logout</Link></li>
          )
        }
      </ul>
    </nav>
  </header>
)

export default Header;