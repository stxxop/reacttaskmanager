import React, { useState, useEffect } from "react";
import Task from "./Task";
import TaskModel from "../models/TaskModel";

const TaskPage = () => {
  const [tasks, setTasks] = useState<TaskModel[] | undefined>(undefined);

  /*
    Use the useEffect hook with an empty array
    to have the effect run only once.
  */

  useEffect(() => {
    setTasks([
      { id: 1, name: "Task 1", isDone: false, createdOn: new Date() },
      { id: 2, name: "Task 2", isDone: true, createdOn: new Date() },
    ]);
  }, []); // <= Empty array

  /*
    This method will update the list of tasks
    with the newly edited task.

  */
  const handleEdit = (editedTask: TaskModel) => {
    /*
      Generating a new list of tasks.
      Iterate over each task. 
      If the ids match, then return the new (edited) task.
      Otherwise return the existing task.
    */
    const newTasks = tasks.map((task: TaskModel) => {
      if (task.id === editedTask.id) {
        return editedTask;
      }
      return task;
    });

    // Update the state.
    setTasks(newTasks);

    return editedTask;
  };

  return (
    <>
      <h1>Tasks</h1>

      <h3>Current Tasks</h3>
      <div>
        {/*
          If the list of tasks exists, iterate over the list.
          Render the Task component for each each task.

          Assign a unique key to each Task component.
        */}
        {tasks &&
          tasks.map((task: TaskModel) => {
            return <Task key={task.id} task={task} handleEdit={handleEdit} />;
          })}
      </div>
    </>
  );
};

export default TaskPage;
