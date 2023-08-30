import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, heroName } = this.props; //In similar manner you can destructure states as well
    return (
      <div>
        <h1>
          Welcome {name} a.k.a {heroName}
        </h1>
      </div>
    );
  }
}

export default Welcome;
