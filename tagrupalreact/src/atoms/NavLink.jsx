import React from "react";
import NavLink from "../atoms/NavLink"; 
import "../styles/atoms/NavLink.css"

const Navigation = () => {
    return (
        <nav className="navbar">
            <NavLink to="/" label="Inicio" />
            <NavLink to="/about" label="Acerca de" />
            <NavLink to="/privacy" label="Privacidad" />
            <NavLink to="/contact" label="Contacto" />
            <NavLink to="/submit-task" label="Enviar Tarea" /> {/* Asegúrate de que esta ruta esté definida en App.js */}
        </nav>
    );
};

export default Navigation;
