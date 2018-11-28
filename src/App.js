import React, { Component } from 'react';
import logo from './logo.svg';
import MockFetchData from './utils/mockFetchData'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Learn React',
      value: 1
    }
  }

  componentDidMount() {
    MockFetchData().then(newValue => {
      this.setState({
        value: newValue
      })
    })
  }

  changeTitle = () => {
    this.setState({
      title: 'I love React!'
    })
  }

  render() {
    const { title, value } = this.state;
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
          <h3>RandomValue: {value}</h3>
        </header>
      </div>
    );
  }
}

export default App;
