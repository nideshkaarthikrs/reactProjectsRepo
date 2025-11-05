import React, { Component } from 'react'
import LifeCycleChild from './LifeCycleChild'

export default class LifeCycleComponent extends Component {
    constructor(props) {
      super(props)
      console.log(`LifeCycleComponent - constructor`)
      this.state = {
         favouriteColor: 'Blue',
      }
    }

   static getDerivedStateFromProps(props, state) {
    console.log(`LifeCycleComponent - getDerivedStateFromProps`)
    // return {
    //     favouriteColor: props.favClr
    // }
    return null;
   }

   componentDidMount() {
    console.log(`LifeCycleComponent - componentDidMount`)
    setTimeout(() => {
        this.setState({
            favouriteColor: 'RED'
        })
    }, 5000);
   }

   shouldComponentUpdate() {
    console.log(`LifeCycleComponent - shouldComponentUpdate`)
    return true; // if this returns false, then the change will not occur, i.e. the setState in componentDidMount() won't work if we return false in shouldComponentUpdate()
   }

   componentDidUpdate() {
    console.log(`LifeCycleComponent - componentDidUpdate`)
   }

  render() {
    console.log(`LifeCycleComponent - render`)
    return (
        <div>
            <h2>LifeCycleComponent</h2>
            <h2>My favourite color: {this.state.favouriteColor} </h2>
            <LifeCycleChild />
        </div>
    )
      
  }
}
