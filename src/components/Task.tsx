import React from "react";
import TaskModel from "../models/TaskModel";

type PropsType = {
  task: TaskModel;
  handleEdit: (task: TaskModel) => TaskModel;
};

const Task = ({ task, handleEdit }: PropsType) => {
  return (
    <div>
      <input
        id="isDoneCheckbox"
        type="checkbox"
        checked={task.isDone}
        onClick={() => {
          const newTask = { ...task, isDone: !task.isDone };
          handleEdit(newTask);
        }}
      />
      <label htmlFor="isDoneCheckbox">{task.name}</label>
    </div>
  );
};

export default Task;
