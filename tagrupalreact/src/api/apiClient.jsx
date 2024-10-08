const API_URL = 'http://localhost:3000/api';

const apiClient = {
    getTasks: async () => {
        try {
            const response = await fetch(`${API_URL}/tasks`);
            if (!response.ok) {
                throw new Error('Error al obtener las tareas');
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    createTask: async (task) => {
        try {
            const response = await fetch(`${API_URL}/tasks`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(task),
            });
            if (!response.ok) {
                throw new Error('Error al crear la tarea');
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    updateTask: async (task) => {
        try {
            const response = await fetch(`${API_URL}/tasks/${task.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(task),
            });
            if (!response.ok) {
                throw new Error('Error al actualizar la tarea');
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    deleteTask: async (id) => {
        try {
            const response = await fetch(`${API_URL}/tasks/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Error al eliminar la tarea');
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
};

export default apiClient;
