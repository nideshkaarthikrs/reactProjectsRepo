import { useState } from "react";
import Task from "./Task";
import TaskCreatorTool from "./TaskCreatorTool";

const TaskList = (props) => {
  let tasksList = props.t;

  return ( 
    <div className="container border border-4 border-info rounded rounded-4 shadow text-center">
      <ul className="list-unstyled">{tasksList.map((i) => (
      <Task
        key={i.taskNum}
        taskNum={i.taskNum}
        whatTask={i.whatTask}
        status={i.status}
        deleteMethod={props.taskDeletionMethod}
      />
    ))}</ul>
    </div>
  );
};

export default TaskList;
