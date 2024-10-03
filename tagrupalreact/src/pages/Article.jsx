import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import DocViewer from "react-doc-viewer";
import Title from "../atoms/Title";
import apiClient from "../api/apiClient";
import MainTemplate from "../templates/MainTemplate";
import doc from "../assets/ApuntesCasoNix.docx"; 

const Article = ({ articles }) => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(()=>{
        const fetchArticle =async () => {
            try{
                const articles = await apiClient.getArticles();
                const foundArticle = articles.find((article) => article.id === parseInt(id));
                setArticle(foundArticle);
            } catch (error) {
                console.error("Error al cargar el artículo", error);
            }
        };
        fetchArticle();
    }, [id]);

    if (!article) {
        return <MainTemplate><p>Artículo no encontrado o cargando...</p></MainTemplate>;
    }

    return (
        <MainTemplate>
            <div>
                <Title>text={article.title} level={2}</Title>
                <p>{article.author}</p>
                <DocViewer documents={[{ uri: doc }]} />
            </div>
        </MainTemplate>
    );

};

export default Article;