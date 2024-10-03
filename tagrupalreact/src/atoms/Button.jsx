import React from "react";

const Button =({Children, onClick, loading = false, style ={},disabled=false}) => {
    return(
        <button
            onClick={onClick}
            style={style}
            className={`custom-button ${loading ? "loading" : ""}`}
            disabled={loading || disabled}
        >
            {loading ? "Cargando..." : Children}
        </button>
    );
};

export default Button;