import React from 'react';
import Navbar from '../components/Navbar.js';
import Product from '../components/Product.js';
import './Menu.css';
import {menuProducts} from '../Products.js'

const Menu = () => {
    return (
        <div className="Menu">
            <Navbar />
            <header>
                <h1>Le Menu</h1>
            </header>
            <main>
                <section className='ProductListDiv'>
                    <h2>A L'unité</h2>
                    <div className='ProductList'>
                        {
                            menuProducts.map((item, index) => {
                                return <Product key={index} name={item.name} image={item.image} alt={item.alt} />
                            })
                        }
                    </div>
                </section>
                <section className='BeerList'>
                    <h2>Nos Bieres artisanales</h2>
                    <p>Découvrez l'essence du Nord dans chacune de nos bières artisanales,  brassées avec passion et expertise au cœur de la France, dans nos brasseries. Chaque gorgée vous transporte instantanément vers les  terres du Nord, où l'authenticité et la convivialité se mélangent dans  chaque brassin. Nos recettes traditionnelles, héritées de générations,  captivent les papilles avec des saveurs riches et un caractère unique.</p>
                    <div>
                        <img src={require("../images/beer-barrel.jpg")} alt="Tonneau de biere"></img>
                        <ul>
                            <li >
                                <span >Volume</span>
                                <span >25CL</span>
                                <span >50CL</span>
                            </li>
                            <li>
                                <span >La Chti’Blonde 8°</span>
                                <span >4,99€</span>
                                <span >6,99€</span>
                            </li>
                            <li>           
                                <span >La Chti’Rouge 6,8°</span>
                                <span >6,99€</span>
                                <span >8,99€</span>
                            </li>
                            <li>                            
                                <span >La Chti’Brune 7,6°</span>
                                <span >5,99€</span>
                                <span >7,99€</span>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className='MenuList'>
                    <h2>Nos Menus</h2>
                    <p>LA TIOTE BILOUTE - 6,50 €<br/>----------------------------------------<br/>1 Tiote Barquette<br/>Viande au choix (Fricadelle, 6x Nuggets, Steak Haché)<br/>1 Soft au choix 33 cl<br/><br/>LE BON GUEULARD - 10.50 €<br/>----------------------------------<br/>L’Barquette<br/>Américain classique (Viande au choix)  ou Le Burger<br/>1 Soft au choix 33 cl<br/><br/>LA GROSSE GUIFE - 15,50 €<br/>-------------------------------------------<br/>1 Maxi Barquette<br/>Américain Large (viande au choix) ou La Chtour<br/>1 Pinte au choix ou 1 Soft 33cl<br/></p>
                </section>
            </main>
        </div>
    );
};

export default Menu;