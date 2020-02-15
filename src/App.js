import React, { Component } from 'react';
import Todologic from './components/TodoLogic';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
export default class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />
          <Todologic />
        </Router>
      </React.Fragment>
    )
  }
}
