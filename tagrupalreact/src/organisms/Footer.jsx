import React from "react";
import NavLink from "../atoms/NavLink";
import "../styles/organisms/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__links">
                <NavLink to="/about" label="Acerca de" />
                <NavLink to="/privacy" label="Privacidad" />
                <NavLink to="/contact" label="Contacto" />
            </div>
            <p className="footer__copy">© 2024 Todos los derechos reservados</p>
        </footer>
    );
};

export default Footer;
