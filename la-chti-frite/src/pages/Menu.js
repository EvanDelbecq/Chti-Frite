import React from 'react';
import Navbar from '../components/Navbar.js';
import Product from '../components/Product.js';
import './Menu.css';

const Menu = () => {
    return (
        <div className="Menu">
            <Navbar />
            <header>
                <h1>Le Menu</h1>
            </header>
            <section className='ProductListDiv'>
                <h2>A L'unité</h2>
                <div className='ProductList'>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </section>
            <section className='BeerList'>
                <h2>Nos Bieres artisanales</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit  libero ac orci aliquet sodales. Praesent tincidunt imperdiet eros, nec  euismod magna tempor quis. Cras feugiat dictum eros, at consectetur elit  vestibulum vel. Donec ut massa tristique, congue magna et, sodales  nunc. Ut et nibh nisl. In aliquam, eros sit amet commodo dictum, neque  ipsum pretium metus, eu sagittis dui massa in orci.</p>
                <div>
                    <img src={require("../images/beer-barrel.jpg")} alt="Tonneau de biere"></img>
                    <ul>
                        <li>La Chti’Blonde 8°</li>
                        <li>La Chti’Rouge 6,8°</li>
                        <li>La Chti’Brune 7,6°</li>
                    </ul>
                </div>
            </section>
            <section className='MenuList'>
                <h2>Nos Menus</h2>
                <p>LA TIOTE BILOUTE - 6,50 €<br/>----------------------------------------<br/>1 Tiote Barquette<br/>Viande au choix (Fricadelle, 6x Nuggets, Steak Haché)<br/>1 Soft au choix 33 cl<br/><br/>LE BON GUEULARD - 10.50 €<br/>----------------------------------<br/>L’Barquette<br/>Américain classique (Viande au choix)  ou Le Burger<br/>1 Soft au choix 33 cl<br/><br/>LA GROSSE GUIFE - 15,50 €<br/>-------------------------------------------<br/>1 Maxi Barquette<br/>Américain Large (viande au choix) ou La Chtour<br/>1 Pinte au choix ou 1 Soft 33cl<br/></p>
            </section>
        </div>
    );
};

export default Menu;