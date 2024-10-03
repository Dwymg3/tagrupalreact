import React from "react";
import Title from "../atoms/Title";
import Button from "../atoms/Button";

const ArticleSection = ({ articles, onApprove }) => {
    <div className="article-section">
        <Title text="Artículos Destacados" />
        <div className="articles-grid">
            {articles.map((article) => (
                <div key={article.id} className="article-box">
                    <h4>{article.title}</h4>
                    <p>{article.author}</p>
                    <p>{article.content.substring(0, 100)}...</p>
                    <Button label="Aprobar" onClick={() => onApprove(article.id)} />
                </div>
            ))}
        </div>
    </div>;
};

export default ArticleSection;

