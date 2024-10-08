import React from 'react';
import '../styles/molecules/Column.css';

const Colum = ({ name, tasks }) => {
    return (
        <div className="column">
            <h2>{name}</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.title}</li> 
                ))}
            </ul>
        </div>
    );
};

export default Colum;
