import React, { useState } from 'react'
// here we're gonna build a counter where the text will change as we type some shit in the input box

export default function CounterWithInput() {
    const [count, setCount] = useState(0) 
    // [count, setCount] = [0, BoundFunctionObject]
    const [text, setText] = useState("")

    function handleAdd() {
        setCount(count+1)
    }
    function handleTextChange() {
        let textFieldValue = document.getElementById("txtInp").value
        setText(textFieldValue)
        setCount(0)
    }

    // or 

    // function handleTextChange(event) {
    //     let textFieldValue = event.target.value
    //     setText(textFieldValue)
    // }


  return (
    <div className='card text-center mx-auto' style={{width:"18rem"}}>
        <input type="text" autoFocus="autoFocus" id="txtInp" onChange={handleTextChange} />
        <div className="card-header">
            <h1> {text} Count: {count}</h1>
        </div>
        <div className="card-body">
            <button className="btn btn-warning" onClick={handleAdd}>Click me!</button>
        </div>
    </div>
  )
}
