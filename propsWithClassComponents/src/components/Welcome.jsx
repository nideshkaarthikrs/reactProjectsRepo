import React, { Component } from 'react'

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <h2>Hello {this.props.actualName} a.k.a {this.props.heroName || "He ain't a super hero bruh"}</h2>
      </div>
    )
  }
}
