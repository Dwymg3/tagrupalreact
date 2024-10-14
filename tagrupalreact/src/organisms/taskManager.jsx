import React from 'react';
import Column from '../molecules/Column';
import '../styles/organisms/TaskManager.css';

const TaskManager = ({ tasks = [] }) => { 
    const formattedTasks = tasks.map(task => ({
        ...task,
        id: Number(task.id) 
    }));

    const columns = [...new Set(formattedTasks.map(task => task.status))];

    return (
        <div className="task-manager">
            {columns.map((columnStatus) => (
                <Column
                    key={columnStatus}
                    status={columnStatus}
                    tasks={formattedTasks.filter(task => task.status === columnStatus)} 
                />
            ))}
        </div>
    );
};

export default TaskManager;
