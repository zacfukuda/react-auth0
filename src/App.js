import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Top from './Components/Top';
import Private from './Components/Private';
import Login from './Auth/Login';
import Logout from './Auth/Logout';

const App = () => (
  <div>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route path="/private" component={Private} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        }}/>
      </Switch>
    </main>
  </div>
)

export default App