import React from "react";
import NavMenu from "../molecules/NavMenu";

const Header = () => {
    return (
        <header className="header">
            <div className="header__brand">
                <h1>Task Manager</h1>
            </div>
            <NavMenu />
        </header>
    );
};

export default Header;
