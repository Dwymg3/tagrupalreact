import React, { useState } from "react";
import apiClient from "../api/apiClient";
import MainTemplate from "../templates/MainTemplate";
import Form from "../molecules/Form";

const SubmitArticle = ({ fetchData }) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await apiClient.createArticle({ title, author, content });
            fetchData();
            setTitle('');
            setAuthor('');
            setContent('');
            alert('Artículo enviado exitosamente');
        } catch (error) {
            console.error('Error al crear el artículo', error);
        }
    };

    const fields = [
        { name: "title", label: "Título", type: "text", value: title, onChange: (e) => setTitle(e.target.value) },
        { name: "author", label: "Autor", type: "text", value: author, onChange: (e) => setAuthor(e.target.value) },
        { name: "content", label: "Contenido", type: "textarea", value: content, onChange: (e) => setContent(e.target.value) }
    ];

    return (
        <MainTemplate>
            <Form fields={fields} onSubmit={handleSubmit} buttonLabel="Enviar" />
        </MainTemplate>
    );
};

export default SubmitArticle;