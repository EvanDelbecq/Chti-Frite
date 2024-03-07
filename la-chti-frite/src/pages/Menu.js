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
                <section className='MenuList'>
                    <h2>Nos Menus</h2>
                    <p>LA TIOTE BILOUTE - 6,50 €<br/>----------------------------------------<br/>1 Tiote Barquette<br/>Viande au choix (Fricadelle, 6x Nuggets, Steak Haché)<br/>1 Soft au choix 33 cl<br/><br/>LE BON GUEULARD - 10.50 €<br/>----------------------------------<br/>L’Barquette<br/>Américain classique (Viande au choix)  ou Le Burger<br/>1 Soft au choix 33 cl<br/><br/>LA GROSSE GUIFE - 15,50 €<br/>-------------------------------------------<br/>1 Maxi Barquette<br/>Américain Large (viande au choix) ou La Chtour<br/>1 Pinte au choix ou 1 Soft 33cl<br/></p>
                </section>
                <section className='ProductListDiv'>
                    <h2>A L'unité</h2>
                    <div className='ProductList'>
                        {
                            menuProducts.map((item, index) => {
                                return <Product key={index} name={item.name} image={item.image} alt={item.alt} description={item.description} price={item.price}/>
                            })
                        }
                    </div>
                </section>
                <section className='BeerList'>
                    <h2>Nos Bieres artisanales</h2>
                    <p>T'vois, nos bières artisanales, c'est l'vrai ducasse du Nord, brassées avec du cœur et du savoir-faire din ch'cœur ed'la France, din nos brasseries. À chaque gorzée, té t'fais direct' maqué dins ch'Nord, là où l'authenticité et l'convivialité i s'mêlent à chaque coup d'pompe. Nos recettes à l'ancienne, qu'on a ram'né ed'ché nos aïeux, i chatouillent les papilles avec des saveurs qui ont du corps et un carafon unique. Cha, ch'est du bon, du vrai, du qu'tu voudros boire à l'ombre d'eul' tour Eiffel.</p>
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
            </main>
        </div>
    );
};

export default Menu;