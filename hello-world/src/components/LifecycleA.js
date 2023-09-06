import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Navneet",
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
    return true;
  }

  shouldComponentUpdate() {
    console.log("Lifecycle A shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("Lifecycle A getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Lifecycle A componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "NavCoders",
    });
  };

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
