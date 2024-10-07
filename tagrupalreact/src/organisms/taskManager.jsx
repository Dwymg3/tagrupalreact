import React, { useState, useEffect } from 'react';
import Colum from '../molecules/Colum';
import Form from '../molecules/Form';
import apiClient from '../api/apiClient';

const TaskManager = () => {
    const [columnsData, setColumnsData] = useState([
        { name: 'Backlog', tasks: [] },
        { name: 'To Do', tasks: [] },
        { name: 'Doing', tasks: [] },
        { name: 'Blocked', tasks: [] },
        { name: 'Done', tasks: [] },
    ]);

    const [newTask, setNewTask] = useState({ title: '', description: '', status: 'Backlog' });

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
        }
    };

    const fields = [
        { id: 'title', label: 'Título', type: 'text', value: newTask.title, onChange: e => setNewTask({ ...newTask, title: e.target.value }) },
        { id: 'description', label: 'Descripción', type: 'text', value: newTask.description, onChange: e => setNewTask({ ...newTask, description: e.target.value }) }
    ];

    return (
        <div>
            <Form fields={fields} onSubmit={handleNewTask} buttonLabel="Agregar Tarea" />
            <div style={{ display: 'flex', gap: '20px' }}>
                {columnsData.map((column, index) => (
                    <Colum key={index} title={column.name} tasks={column.tasks} />
                ))}
            </div>
        </div>
    );
};

export default TaskManager;
