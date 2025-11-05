import React, { Component } from 'react'

export default class MessageComponent extends Component {

  constructor(){
    super() // first statement of a sub class constructor should be a call to the super class's constructor
    this.state = {
        message: "Welcome Visitor",
        buttonText: "Subscribe"
    }
  }  
  changeMessage() {
    if (this.state.buttonText === "Subscribe") {
        this.setState({
        message: "Thanks for subscribing!!",
        buttonText: "Unsubscribe"
    }) 
    }else {
        this.setState({
        message: "Welcome Visitor",
        buttonText: "Subscribe"
    })
    }

  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        {/* <button className="btn btn-danger" onClick={() => this.changeMessage()}>Subscribe</button> */}
        <button className="btn btn-danger" onClick={this.changeMessage.bind(this)}>{this.state.buttonText}</button>
      </div>
    )
  }
}
