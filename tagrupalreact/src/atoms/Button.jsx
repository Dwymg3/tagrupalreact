import React from "react";
import '../styles/atoms/Button.css';

const Button = ({ children, onClick, loading = false, style = {}, disabled = false }) => {
    return (
        <button
            onClick={onClick}
            style={style}
            className={`custom-button ${loading ? "loading" : ""}`}
            disabled={loading || disabled}
        >
            {loading ? "Cargando..." : children}
        </button>
    );
};

export default Button;
