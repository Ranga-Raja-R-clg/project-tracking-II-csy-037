import React, { Component } from "react";

export default class Handler extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  handleclick() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }
  render() {
    if (this.state.counter === 5) {
      throw new Error("manual error");
    }
    return (
      <div>
        counter : {this.state.counter}
        <button onClick={this.handleclick.bind(this)}>Increment</button>
      </div>
    );
  }
}
