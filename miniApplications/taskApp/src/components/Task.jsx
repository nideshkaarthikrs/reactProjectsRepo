import React from "react";

const Task = (props) => {

  let textColour;
  if (props.status==="Pending") {
    textColour="red"
  }else if (props.status==="Completed") {
    textColour="green"
  }

  return (
        <li className="d-flex align-items-center justify-content-between m-3 bg-white p-2 border border-5 border-warning rounded-4">
          <div className="me-3">
            <h3 className="mb-0">{props.taskNum}</h3>
          </div>
          <div className="me-auto">
            <h4 className="mb-0" style={{color:textColour}}>{props.whatTask}</h4>
          </div>
          <button className="btn btn-danger" onClick={() => {props.deleteMethod(props.taskNum)}}>Delete</button>
        </li>
  );
};

export default Task;
