import React from 'react';

function MainTemplate({ children }) {
    console.log("Rendering MainTemplate Component"); // Verificar si MainTemplate se renderiza correctamente
    return (
        <div>
            <header>Main Template Header</header>
            <main>{children}</main>
            <footer>Main Template Footer</footer>
        </div>
    );
}

export default MainTemplate;
