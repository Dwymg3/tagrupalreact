import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import MainTemplate from './templates/MainTemplate';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import TaskManager from './organisms/TaskManager';

function App() {
    // Datos de ejemplo para las tareas
    const tasks = [
        { id: 1, title: 'Tarea 1', status: 'to-do' },
        { id: 2, title: 'Tarea 2', status: 'in-progress' },
        { id: 3, title: 'Tarea 3', status: 'done' },
        { id: 4, title: 'Tarea 4', status: 'to-do' },
    ];

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <MainTemplate>
                            <TaskManager tasks={tasks} /> {/* Pasar las tareas aquí */}
                        </MainTemplate>
                    }
                />
                <Route path="/about" element={<MainTemplate><About /></MainTemplate>} />
                <Route path="/privacy" element={<MainTemplate><Privacy /></MainTemplate>} />
                <Route path="/contact" element={<MainTemplate><Contact /></MainTemplate>} />
            </Routes>
        </Router>
    );
}

export default App;
