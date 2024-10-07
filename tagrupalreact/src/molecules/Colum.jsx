import React from 'react';
import Task from '../atoms/Task';

const Colum = ({ title, tasks }) => {
  return (
    <div className="colum">
      <h2>{title}</h2>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Colum;
