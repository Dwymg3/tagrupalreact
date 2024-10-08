import React, { useState, useEffect } from 'react';
import Column from '../molecules/Column'; 
import Form from '../molecules/Form';
import apiClient from '../api/apiClient';

const TaskManager = () => {
    const [columnsData, setColumnsData] = useState([
        { id: 1, name: 'Backlog', tasks: [] },
        { id: 2, name: 'To Do', tasks: [] },
        { id: 3, name: 'Doing', tasks: [] },
        { id: 4, name: 'Blocked', tasks: [] },
        { id: 5, name: 'Done', tasks: [] },
    ]);

    const [newTask, setNewTask] = useState({ title: '', description: '', status: 'Backlog' });
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const tasks = await apiClient.getTasks();
                const updatedColumns = [...columnsData];

                tasks.forEach(task => {
                    const columnIndex = updatedColumns.findIndex(col => col.name === task.status);
                    if (columnIndex !== -1) {
                        updatedColumns[columnIndex].tasks.push(task);
                    }
                });

                setColumnsData(updatedColumns);
            } catch (error) {
                console.error('Error al cargar las tareas:', error);
                setError('Error al cargar las tareas.');
            }
        };

        fetchTasks();
    }, []);

    const handleNewTask = async (e) => {
        e.preventDefault();
        try {
            const createdTask = await apiClient.createTask(newTask);
            const updatedColumns = [...columnsData];
            const columnIndex = updatedColumns.findIndex(col => col.name === createdTask.status);
            if (columnIndex !== -1) {
                updatedColumns[columnIndex].tasks.push(createdTask);
                setColumnsData(updatedColumns);
            }
            setNewTask({ title: '', description: '', status: 'Backlog' });
        } catch (error) {
            console.error('Error al crear la tarea:', error);
            setError('Error al crear la tarea.');
        }
    };

    const fields = [
        { id: 'title', label: 'Título', type: 'text', value: newTask.title, onChange: e => setNewTask({ ...newTask, title: e.target.value }) },
        { id: 'description', label: 'Descripción', type: 'text', value: newTask.description, onChange: e => setNewTask({ ...newTask, description: e.target.value }) }
    ];

    return (
        <div>
            {error && <p className="error-message">{error}</p>} 
            <Form fields={fields} onSubmit={handleNewTask} buttonLabel="Agregar Tarea" />
            <div style={{ display: 'flex', gap: '20px' }}>
                {columnsData.map((column) => (
                    <Column key={column.id} name={column.name} tasks={column.tasks} />
                ))}
            </div>
        </div>
    );
};

export default TaskManager;
