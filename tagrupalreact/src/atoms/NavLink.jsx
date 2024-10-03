import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ to, label }) => (
    <Link to={to} className="nav-link">
        {label}
    </Link>
);

export default NavLink;