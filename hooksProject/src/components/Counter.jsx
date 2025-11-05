import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0) 
    // [count, setCount] = [0, BoundFunctionObject]
    function handleAdd() {
        setCount(count+1)
    }


  return (
    <div className='card text-center mx-auto' style={{width:"18rem"}}>
        <div className="card-header">
            <h1>Count: {count}</h1>
        </div>
        <div className="card-body">
            <button className="btn btn-warning" onClick={handleAdd}>Click me!</button>
        </div>
    </div>
  )
}
