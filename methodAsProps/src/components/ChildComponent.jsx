import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
        <button onClick={() => props.greetHandler("Maxx")}>Greet Parent</button>
        {/* Here we are passing data from child to parent component's method */}
      <h3>Child Component</h3>
    </div>
  )
}

export default ChildComponent
