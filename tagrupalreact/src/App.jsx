import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./organisms/Header";
import Footer from "./organisms/Footer";
import Home from "./pages/Home";
import apiClient from "./api/apiClient";
import "./styles/App.css";


const SubmitArticle = React.lazy(() => import('./pages/SubmitArticle'));
const Article = React.lazy(() => import("./pages/Article"));

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const fetchArticles = await apiClient.getArticles();
      setArticles(fetchArticles);

    } catch (error) {
      setError("Error al cargar los artículos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Cargando artículos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home articles={articles} fetchData={fetchData} />} />
          <Route path="/submit" element={<SubmitArticle fetchData={fetchData} />} />
          <Route path="/article/:id" element={<Article articles={articles} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}


export default App;

