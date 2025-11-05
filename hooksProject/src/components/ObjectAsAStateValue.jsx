import React, { useState } from "react";
// here we're gonna set an object as a state value

export default function ObjectAsAStateValue() {
  const [details, setDetails] = useState({
    count: 0,
    text: "",
  });

  function handleAdd() {
    setDetails({
      ...details, //getting the value of previous object
      count: details.count + 1, // changing the required data
    });
  }

  function handleTextChange(event) {
    setDetails({ ...details, text: event.target.value });
  }
 
  return (
    <div className="card text-center mx-auto" style={{ width: "18rem" }}>
      <input
        type="text"
        autoFocus="autoFocus"
        id="txtInp"
        onChange={handleTextChange}
      />
      <div className="card-header">
        <h1>
          {details.text} Count: {details.count}
        </h1>
      </div>
      <div className="card-body">
        <button className="btn btn-warning" onClick={handleAdd}>
          Click me!
        </button>
      </div>
    </div>
  );
}
