import React, {useState} from "react";
import NavLink from "../atoms/NavLink";

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
                <NavLink to="/news" label="Noticias" />
                <NavLink to="/submit-article" label="Escribir Artículo" />
            </div>
        </div>
    );
};

export default NavMenu;