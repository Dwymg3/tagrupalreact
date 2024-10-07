import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./organisms/Header";
import Footer from "./organisms/Footer";
import TaskManager from "./organisms/taskManager";
import apiClient from "./api/apiClient";
import "./styles/App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const fetchTasks = await apiClient.getTasks(); 
      setTasks(fetchTasks);
    } catch (error) {
      setError("Error al cargar las tareas");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Cargando tareas...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<TaskManager tasks={tasks} />} /> {/* Renderiza TaskManager y pasa las tareas */}
          {/* Aquí puedes agregar otras rutas como para crear o editar tareas */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
