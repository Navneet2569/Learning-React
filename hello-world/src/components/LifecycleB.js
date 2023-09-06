import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Navneet",
    };
    console.log("LifecycleB constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedFormProps");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("Lifecycle B shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("Lifecycle B getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Lifecycle B componentDidUpdate");
  }
  render() {
    console.log("LifecycleB render");
    return <div>LifecycleB</div>;
  }
}

export default LifecycleB;
