import React, { useState, useEffect } from 'react';
import apiClient from '../api/apiClient';
import ArticleSection from '../molecules/ArticleSection';
import MainTemplate from '../templates/MainTemplate';


const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try{
      const articlesData = await apiClient.getArticles();
      setArticles(articlesData);
      setLoading(false);
    } catch (error) {
      console.error("Error al cargar los artículos", error);
    }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <MainTemplate>
        <p>Cargando artículos...</p>
      </MainTemplate>
    );
  }

  return (
    <MainTemplate>
      <ArticleSection articles={articles} />
    </MainTemplate>
  );
};

export default Home;
