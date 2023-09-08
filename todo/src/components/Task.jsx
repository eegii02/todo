import React from "react";
import { FaTimes } from "react-icons/fa";
import '../index.css'

const Task = ({ task, dlt }) => {
  return (
    <div className="task">
      <h3>
        {task.text} <FaTimes style={{ color: "red" }} onClick={()=> dlt(task.id)}/>
      </h3>
    </div>
  );
};

export default Task;
