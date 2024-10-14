import React from 'react';
import Column from '../molecules/Column';

const TaskManager = ({ tasks = [] }) => { // Asigna un valor predeterminado a tasks
    // Asegúrate de que los IDs sean números
    const formattedTasks = tasks.map(task => ({
        ...task,
        id: Number(task.id) // Asegúrate de que el ID sea un número
    }));

    // Agrupar tareas por columna (suponiendo que el status define la columna)
    const columns = [...new Set(formattedTasks.map(task => task.status))];

    return (
        <div className="task-manager">
            {columns.map((columnStatus) => (
                <Column
                    key={columnStatus}
                    status={columnStatus}
                    tasks={formattedTasks.filter(task => task.status === columnStatus)} // Filtra tareas por columna
                />
            ))}
        </div>
    );
};

export default TaskManager;
