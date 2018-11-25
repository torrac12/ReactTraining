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

  reset = () => {
    this.setState({
      count: 0
    })
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        I'm a React Application
        <hr />
        <button onClick={this.add}>click me to add</button>  
        <ResetButton onReset={this.reset}/>
        <hr />
        <Box count={count} />
        
      </div>)
  }
}

const Box = props => <div>The current number is:{props.count}</div>
const ResetButton = props => <button onClick={props.onReset}>reset</button>

export default App;
