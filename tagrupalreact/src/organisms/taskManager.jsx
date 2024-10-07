import React from 'react';
import Column from './Column';

const TaskManager = () => {
  const columnsData = [
    { name: 'Backlog', tasks: [] },
    { name: 'To Do', tasks: [] },
    { name: 'Doing', tasks: [] },
    { name: 'Blocked', tasks: [] },
    { name: 'Done', tasks: [] },
  ];

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {columnsData.map((column, index) => (
        <Column key={index} name={column.name} tasks={column.tasks} />
      ))}
    </div>
  );
};

export default TaskManager;