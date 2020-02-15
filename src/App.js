import React, { Component } from 'react';
import Todologic from './components/TodoLogic';
import Header from './components/Header';

export default class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Header/>
        <Todologic />
      </React.Fragment>
    )
  }
}
