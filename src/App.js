import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Learn React'
    }
  }

  changeTitle = () => {
    this.setState({
      title: 'I love React!'
    })
  }
  render() {
    const { title } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <HeaderContent title={title} onClick={this.changeTitle} />
          <HeaderButton onClick={this.changeTitle} />
        </header>
      </div>
    );
  }
}

const HeaderContent = ({ title }) => {
  return (
    <div>
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
    </div>
  )
}

const HeaderButton = ({ onClick }) => {
  return <button onClick={onClick}>change my sibling component</button>
}

export default App;



// const description = 'React is the most popular framework!'
// const Description = ({ description }) => <p>{description}</p>