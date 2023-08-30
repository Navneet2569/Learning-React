import React, { Component } from "react";

class ClassClick extends Component {
  clickIt() {
    const a = document.getElementById("a");
    a.textContent = "Clicked";
  }
  render() {
    return (
      <div>
        <button id="a" onClick={this.clickIt}>
          Click Me
        </button>
      </div>
    );
  }
}

export default ClassClick;
