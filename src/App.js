import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Signup from './Component/auth/Signup'
import Home from './Component/auth/Home'
import Fillin from './Component/auth/Fillin'

import "./App.css";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/fillin" component={Fillin} />
        </div>
      </Router>

    );
  }
}

export default App;
