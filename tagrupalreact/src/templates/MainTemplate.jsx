import React from 'react';
import Header from '../organisms/Header';

function MainTemplate({ children }) {
    console.log("Rendering MainTemplate Component");
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default MainTemplate;
