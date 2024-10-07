// Colum.jsx
import React from 'react';

const Colum = ({ name, tasks }) => {
    return (
        <div className="column">
            <h2>{name}</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.title}</li> // Asume que task tiene un id y un title
                ))}
            </ul>
        </div>
    );
};

export default Colum;
