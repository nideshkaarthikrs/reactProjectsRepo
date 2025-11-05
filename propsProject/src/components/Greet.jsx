import React from 'react'

const Greet = (props) => {
  return (
    <div>
      <h3>Hello {props.name}</h3>
      {props.children} 
    </div>
  )
}

export default Greet
