import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    //First Method using if else
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Navneet</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    //Second Method using Element variable method
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Navneet</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;

    //Third Method using Ternery Operator Method
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Navneet </div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    //Fourth Method using Short Circuit Method
    return this.state.isLoggedIn && <div>Welcome Navneet</div>;
  }
}

export default UserGreeting;
