import React, { Component } from 'react';

import './App.css';
import Body from '././components/body/body';
import Header from '././components/header/header';
import { user } from './json/data.json';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user
    }
  }
  render() {
     const name = user.name
       return (
          <div className="App">
            <Header name = { name }/>
            <Body user = { user }/>
          </div>
        );
  }
}

export default App;
