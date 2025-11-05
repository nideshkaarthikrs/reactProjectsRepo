import React, { Component } from "react";

export default class LifeCycleChild extends Component {
  constructor(props) {
    super(props);
    console.log(`LifeCycleChild - constructor`);
    this.state = {
      favouriteColor: "Blue",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(`LifeCycleChild - getDerivedStateFromProps`);
    return null;
  }

  componentDidMount() {
    console.log(`LifeCycleChild - componentDidMount`);
  }
  render() {
    console.log(`LifeCycleChild - render`);
    return <div>LifeCycleChild</div>;
  }
}
