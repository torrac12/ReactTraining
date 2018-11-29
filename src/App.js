import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 0
    }
  }

  renderContent() {
    return (
      <div>
        maybe there is a lot of content,
        <div>
          and the structure is very complex,
          <div>or there logic is  independent,</div>
          <div>we can extract to a function,</div>
        </div>
      </div>
    )
  }
  render() {
    const { status } = this.state;
    let title;
    if (status) {
      title = 'Learn React!'
    } else {
      title = 'I love react'
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
          <div style={{color: 'red'}}>
            { status === 1 && 'there is subtitle placeholder'}
          </div>
          { this.renderContent() }
        </header>
      </div>
    );
  }
}

export default App;
