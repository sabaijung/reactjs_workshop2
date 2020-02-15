import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Blanklayout from './layouts/blanklayout';
import FullLayout from './layouts/fulllayout';
import Signin from './views/authentication/signin';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" name="authentication" component={Blanklayout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
