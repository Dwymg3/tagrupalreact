import React from 'react';
import '../styles/atoms/Task.css';

const Task = ({ task }) => {
    return (
        <div className="task">
            <h3>{task.title}</h3>
        </div>
    );
};

export default Task;
