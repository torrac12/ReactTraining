import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import demoAudio from './demo.mp3'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTime: 0
    }
  }

  componentDidMount() { 
    // this.audio.play()
    this.audio.addEventListener('timeupdate', this.updateTime)
  }
  componentWillUnmount() { // why shold we do this
    this.audio.removeEventListener('timeupdate', this.updateTime)
  }

  updateTime = () => {
    this.setState({
      currentTime: this.audio.currentTime
    })
  }

  getAudio = audioNode => {
    this.audio = audioNode
  }
  render() {
    return (
      <div className="App">
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
          <h3>current play time is: {this.state.currentTime}</h3>
        </header>
      </div>
    );
  }
}

export default App;
