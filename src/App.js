import React, { Component } from 'react';
import { Button, Input, Icon } from 'semantic-ui-react';
import logo from './logo.png';
import phone from './phone.png';
import comingSoon from './coming-soon.png';
import submitText from './submit-text.png';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

const API = process.env.REACT_APP_API;

function postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
  .then(response => response.json()) // parses response to JSON
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isLoading: false
    }
    this.handleRef = this.handleRef.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }
  handleRef(c) {
    this.inputRef = c;
  }
  handleSignUp() {
    this.setState({ isLoading: true });
    postData(`${API}/reviva/landing-signup`, {email: this.state.email })
      .then(data => {
        this.setState({
          email: '',
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          email: '',
          isLoading: false
        });
      });
  }
  updateEmail(e, data) {
    const { value: email } = data;
    this.setState({
      email
    });
  }
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
              ref={this.handleRef}
              onChange={this.updateEmail}
              value={this.state.email}
              loading={this.state.isLoading}
              size='big'
              action={
                <Button onClick={this.handleSignUp} icon>
                  <Icon name='arrow right'/>
                </Button>
              }
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
