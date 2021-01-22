import React, { Component } from "react";

import { Cars } from "./cars";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [
        { id: 2, name: "Doe", age: 27 },
        { id: 3, name: "Mac", age: 28 },
        { id: 4, name: "Kelly", age: 29 },
        { id: 5, name: "Ire", age: 30 },
        { id: 6, name: "Chan", age: 31 },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <Cars info={this.state.info} />
      </React.Fragment>
    );
  }
}
