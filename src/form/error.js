import React, { Component } from "react";

export default class Validate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      phone: "",
      error: {},
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  validator() {
    var errors = {};
    if (!this.state.username.trim()) {
      errors.username = "username is required";
    }
    return errors;
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = this.validator();
    if (Object.keys(validationErrors).length === 0) {
      console.log("form submitted succesfully!");
    }
    this.setState({
      error: validationErrors,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          ></input>
          {this.state.error.username && <p>{this.state.error.username}</p>}
        </div>
        <div>
          <label>email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          ></input>
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          ></input>
        </div>
        <div>
          <label>phone</label>
          <input
            type="tel"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          ></input>
        </div>
        <br />
        <button type="submit">submit</button>
      </form>
    );
  }
}
