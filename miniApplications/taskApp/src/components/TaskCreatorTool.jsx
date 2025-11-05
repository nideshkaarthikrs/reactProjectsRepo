import { useState } from "react";
import TaskList from "./TaskList";

const TaskCreatorTool = () => {
  let [taskInfo, setTaskInfo] = useState({
    taskId: 1,
    taskName: "",
    taskStatus: "",
  });

  let [tasks, setTasks] = useState([]);

  function handleTaskNameChange(event) {
    setTaskInfo({
      ...taskInfo,
      taskName: event.target.value,
    });
  }

  function handleAddItem(event) {
    //handle the empty status value here
    event.preventDefault()
    if (taskInfo.taskName === "") {
      alert("Please enter a valid task!")
      return
    }
    if (taskInfo.taskStatus === "") {
      alert("Please select a status!")
      return
    }
    setTaskInfo({
      ...taskInfo,
      taskId: taskInfo.taskId + 1,
    });
    setTasks([
      ...tasks,
      { taskNum: taskInfo.taskId, whatTask: taskInfo.taskName, status: taskInfo.taskStatus },
    ]);
  }

  function handleTaskDeletion(id) {
    setTasks(tasks.filter((i) => i.taskNum != id ))
    // alert("Deleting stuff")
  }

  let [showTasks, setShowTasks] = useState(true);

  function handleHideTasks() {
    if (showTasks === true) {
      setShowTasks(false);
    } else {
      setShowTasks(true);
    }
  }

  function handleReset() {
    setTasks([])
    setTaskInfo({
    taskId: 1,
    taskName: "",
    taskStatus: "",
  })
  }

  function handleStatusChange(event) {
    setTaskInfo({
      ...taskInfo,
      taskStatus: event.target.value
    })
  }

  return (
    <div className="container border border-secondary border-5 p-4 rounded-4 shadow-lg text-center">
      <div className="row row-cols-1 row-cols-md-4 g-3">

        {/* Getting input for task name */}
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="New Task Name"
            aria-label="New Task Name"
            onChange={handleTaskNameChange}
            value={taskInfo.taskName}
          />
        </div>

        {/* Status drop-down */}
        <div className="col">
          <select value={taskInfo.taskStatus} className="form-select" name="tasks" onChange={handleStatusChange}>
            <option disabled value="">Status</option>
            <option value="Pending" >Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Add task button */}
        <div className="col">
          <button className="btn btn-success w-100" type="submit" onClick={handleAddItem}>
            Add Task
          </button>
        </div>

        {/* Reset button */}
        <div className="col">
          <button className="btn btn-primary w-100" onClick={handleReset}>Reset</button>
        </div>
      </div>

      <h1 className="text-center text-white mt-5">Tasks List</h1>

      {/* Condtional rendering using short-circuit operator */}
      {showTasks && (
        <>
          <button className="btn btn-primary m-3" onClick={handleHideTasks}>
            Hide Tasks
          </button>
          <TaskList t={tasks} taskDeletionMethod={handleTaskDeletion} />
        </>

      )}

      {!showTasks && (
        <button className="btn btn-success m-3" onClick={handleHideTasks}>
          Show Tasks
        </button>
      )}
    </div>
  );
};

export default TaskCreatorTool;
