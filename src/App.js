import React from "react";


class Item extends React.Component {
  state = {
    text: this.props.text
  };

  onChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  componentDidMount() {
    console.log("Mounted ", this.props.text);
  }


  render() {
    const { text } = this.state;
    return (
      <li>
        <input value={text} onChange={this.onChange} />
      </li>
    );
  }
}

class App extends React.Component {
  state = {
    items: [
      {
        text: "First",
        id: 1
      },
      {
        text: "Second",
        id: 2
      }
    ]
  };

  addItem = () => {
    const items = [{ text: "Front", id: Date.now() }, ...this.state.items];
    this.setState({ items });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item, index) => (
            <Item {...item} key={item.id} />
          ))}
        </ul>
        <button onClick={this.addItem}>Add Item</button>
      </div>
    );
  }
}

export default App;
