import React from 'react'
import Task from './Task';

const Tasks = ({tasks, dlt}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} dlt={dlt} />
      ))}
    </>
  );
}

export default Tasks
