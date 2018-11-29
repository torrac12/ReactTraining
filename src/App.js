import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import demoAudio from './demo.mp3'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 'test'
    }
  }

  getNode = (node) => {
    this.node = node;
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  getValues = ()

  render() {
    const { value } = this.state;
    return (
      <div className="App" ref={this.getNode} >
        <header className="App-header" >
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
            Learn React
          </a>
          <hr />
          <label>uncontrolled mode</label>
          <input ref={this.getNode} />
          <hr />
          {
            // 1. use in different situation
            // 2. think about controlled vs uncontrolled mode in other components(not only form)
          }
          <label>controlled mode</label>
          <input value={value} onChange={this.handleChange} /> 
        </header>
        <button onClick={this.getValues}>GET VALUES</button>
      </div>
    );
  }
}

export default App;
