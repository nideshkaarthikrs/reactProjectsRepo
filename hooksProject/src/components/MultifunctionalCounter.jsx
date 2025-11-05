import React, { useState } from "react";

const MultifunctionalCounter = () => {
  const [details, setDetails] = useState({
    count: 0,
    text: "",
  });

  function handleAdd() {
    setDetails({
      ...details,
      count: details.count + 1,
    });
  }

  function handleTextChange(event) {
    setDetails({ ...details, text: event.target.value });
  }

  function handleSub() {
    if (details.count > 0) {
      setDetails({
        ...details,
        count: details.count - 1,
      });
    }
  }

  function reset() {
    setDetails({
      ...details,
      count: 0,
    });
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
          Increment
        </button>{" "}
        <br />
        <br />
        <button className="btn btn-warning" onClick={handleSub}>
          Decrement
        </button>{" "}
        <br />
        <br />
        <button className="btn btn-warning" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default MultifunctionalCounter;
