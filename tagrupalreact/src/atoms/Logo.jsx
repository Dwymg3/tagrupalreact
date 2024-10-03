import React from "react";
import { Link } from "react-router-dom";

const Logo =() => (
        <Link to="/" className="logo">
            <img src="logo.svg" alt="Logo" />
        </Link>
    );

export default Logo;