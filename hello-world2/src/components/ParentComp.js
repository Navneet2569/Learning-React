import React, { Component, PureComponent } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Navneet",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Navneet",
      });
    }, 2000);
  }

  render() {
    console.log("Parent Component Rendered");
    return (
      <div>
        Parent Component
        {/* <RegComp name={this.state.name} /> */}
        {/* <PureComp name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
