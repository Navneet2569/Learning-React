import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }
  changeMessage() {
    this.setState({
      message: "GoodBye",
    });
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={() => this.changeMessage()}>Click</button>
      </div>
    );
  }
}

export default EventBind;
