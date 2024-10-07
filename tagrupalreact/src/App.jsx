import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./organisms/Header";
import Footer from "./organisms/Footer";
import TaskManager from "./organisms/taskManager"; // Asegúrate de que la ruta sea correcta
import apiClient from "./api/apiClient"; // Mantener la conexión a la API
import "./styles/App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Para manejar errores de API

  useEffect(() => {
    const fetchData = async () => {
      try {
        await apiClient.getTasks(); // Esto se puede dejar así si tienes la API funcionando
      } catch (error) {
        setError("Error al cargar las tareas");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<TaskManager />} />
          {/* Puedes agregar más rutas según sea necesario */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
