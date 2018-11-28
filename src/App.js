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
  render() {
    const { title } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <HeaderContent title={title} />
        </header>
      </div>
    );
  }
}

const HeaderContent = ({title}) => {
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

export default App;

// const TitleLink = ({ title }) => (
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     { title }
//   </a>
// )

// const description = 'React is the most popular framework!'
// const Description = ({ description }) => <p>{description}</p>