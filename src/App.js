import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './containers/HomePage'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={'wrapper'}>
        <Switch>
            <Route
              exact
              path={'/'}
              render={(props) => <Home {...props} />}
            />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
