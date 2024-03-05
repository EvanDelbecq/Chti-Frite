import React from 'react';
import Navbar from '../components/Navbar.js';

const Menu = () => {
    return (
        <div >
            <Navbar />
            <header>
                <h1>Le Menu</h1>
            </header>
            <section>
                <h2>A L'unité</h2>
            </section>
            <section>
                <h2>Nos Bieres artisanales</h2>
            </section>
            <section>
                <h2>Nos Menus</h2>
            </section>
        </div>
    );
};

export default Menu;