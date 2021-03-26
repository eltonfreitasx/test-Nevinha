import React, { Component } from "react";
import DisplayList from "./DisplayList";

class App extends Component {
  constructor() {
    super();
    this.state = { text: "", items: [] };
  }

  handleSubmit(event) {
    event.preventDefault();
    //console.log("clickou");

    var text = this.state.text;
    var newItems = this.state.items.concat(text);

    this.setState({ text: "", items: newItems });
  }

  handleDelete(itemToBeDeleted) {
    var newItems = this.state.items.filter((_item) => {
      return _item != itemToBeDeleted;
    });

    this.setState({ items: newItems });
  }

  handleChange(event) {
    var text = event.target.value;
    this.setState({ text: text });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            onChange={this.handleChange.bind(this)}
            value={this.state.text}
          />
          <button type="submit">Submit</button>
        </form>

        <DisplayList
          handleDelete={this.handleDelete.bind(this)}
          items={this.state.items}
        />
      </div>
    );
  }
}

export default App;
