import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import demoAudio from './demo.mp3'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      width: 0
    }
  }

  componentDidMount() { // think about it why should do in this lifeCycle
    this.setState({
      width: this.node.clientWidth
    })

    this.audio.play()

  }

  getNode = (node) => {
    this.node = node;
  }

  getAudio = audioNode => {
    this.audio = audioNode
  }
  render() {
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
          <h3>img’s width is {this.state.width}</h3>
          <audio src={demoAudio} controls  ref={this.getAudio}/> 
        </header>
      </div>
    );
  }
}

export default App;
