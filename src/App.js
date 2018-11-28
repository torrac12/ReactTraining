import React, { Component } from 'react';
import logo from './logo.svg';
import audioDemo from './demo.mp3'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Learn React',
      currentTime: 0
    }
  }

  componentDidMount() {
    this.audio.addEventListener('timeupdate', () => {
      this.setState({
        currentTime: this.audio.currentTime
      })
    })
  }

  getAudio = (audioNode) => {
    this.audio = audioNode
  }

  render() {
    const { title, currentTime } = this.state;
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
            { title }
          </a>
          <div>///</div>
          <audio ref={this.getAudio} src={audioDemo} controls/>
          <div>{currentTime}</div>
        </header>
      </div>
    );
  }
}

export default App;
