import React, { useState } from "react";
import NavLink from "../atoms/NavLink";
import "../styles/molecules/NavMenu.css";

const NavMenu = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="nav-menu">
            <div
                className={`burger-menu ${isActive ? 'is-active' : ''}`}
                onClick={() => setIsActive(!isActive)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`navbar-items ${isActive ? 'is-active' : ''}`}>
                <NavLink to="/" label="Inicio" />
                <NavLink to="/tasks" label="Tareas" />
                <NavLink to="/submit-task" label="Agregar Tarea" />
            </div>
        </div>
    );
};

export default NavMenu;
