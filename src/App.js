import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

import "./index.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/login" component ={LoginPage} />
       
          
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
