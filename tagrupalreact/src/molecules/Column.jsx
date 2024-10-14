import React from 'react';
import Task from '../atoms/Task';

const Column = ({ status, tasks }) => {
    return (
        <div className={`column column-${status}`}>
            <h2>{status}</h2>
            {tasks.length > 0 ? (
                tasks.map(task => (
                    <Task key={task.id} task={task} />
                ))
            ) : (
                <p>No hay tareas en esta columna.</p> 
            )}
        </div>
    );
};

export default Column;
