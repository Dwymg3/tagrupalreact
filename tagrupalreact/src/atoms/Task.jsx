import React from 'react';

const Task = ({ title, description, onComplete, onDelete }) => {
    return (
        <div className="task">
            <h3 className="task-title">{title}</h3>
            <p className="task-description">{description}</p>
            <div className="task-actions">
                <button onClick={onComplete} className="task-button complete">
                    Completar
                </button>
                <button onClick={onDelete} className="task-button delete">
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default Task;
