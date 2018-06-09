import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'
import logo from './logo.png';
import phone from './phone.png';
import comingSoon from './coming-soon.png';
import submitText from './submit-text.png';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-body">
          <div className="App-left App-space">
            <img src={comingSoon} className="App-comingSoon" />
            <img src={submitText} className="App-submitText" />
            <Input
              label={{ tag: true, content: 'Send' }}
              size='big'
              labelPosition='right'
              placeholder='Email'
            />
          </div>
          <div className="App-right App-space">
            <img src={phone} className="App-phone" alt="phone" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
