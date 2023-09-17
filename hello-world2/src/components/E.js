import React, { Component } from "react";
import F from "./F";
import UserContext from "./UserContext";
class E extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        Component E context {this.context}
        <F />
      </div>
    );
  }
}

// E.contextType = UserContext;

export default E;
