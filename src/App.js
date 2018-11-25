import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  add = () => {
    this.setState({
      count: this.state.count + 1 
    })
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        I'm a React Application
        <hr />
        <button onClick={this.add}>click me to add</button>  
        <hr />
        <Box count={count} />
      </div>)
  }
}

const Box = props => <div>The current number is:{props.count}</div>

export default App;
