const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

const apiClient = {
    getArticles: async () => {
        try {
            const response = await fetch(`${API_URL}/articles`);
            if (!response.ok) {
                throw new Error('Error al obtener los artículos');
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    createArticle: async (article) => {
        try {
            const response = await fetch(`${API_URL}/articles`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(article),
            });
            if (!response.ok) {
                throw new Error('Error al crear el artículo');
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    updateArticle: async (article) => {
        try {
            const response = await fetch(`${API_URL}/articles/${article.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(article),
            });
            if (!response.ok) {
                throw new Error('Error al actualizar el artículo');
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    deleteArticle: async (id) => {
        try {
            const response = await fetch(`${API_URL}/articles/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Error al eliminar el artículo');
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    approveArticle: async (id) => {
        try {
            const response = await fetch(`${API_URL}/articles/${id}/approve`, {
                method: 'PUT',
            });
            if (!response.ok) {
                throw new Error('Error al aprobar el artículo');
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

}