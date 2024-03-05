import React from 'react';
import './Homepage.css';

function Homepage() {
  return (
    <div className="Homepage">
        <header >
            <div className='title'>
                <img src={require("../images/Logo Chti'frite.png")} alt="Logo" />
                <h1>La Chti'frite</h1>
                <h2>La frite traditionelle du Nord</h2>
            </div>
        </header>
        <section className='AboutUs'>
            <div>
                <h2>Qui sommes-nous ?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit  libero ac orci aliquet sodales. Praesent tincidunt imperdiet eros, nec  euismod magna tempor quis. Cras feugiat dictum eros, at consectetur elit  vestibulum vel. Donec ut massa tristique, congue magna et, sodales  nunc. Ut et nibh nisl. In aliquam, eros sit amet commodo dictum, neque  ipsum pretium metus, eu sagittis dui massa in orci.</p>
            </div>
            <img src={require("../images/peel-the-potato.jpg")} alt="Un home qui épluche des pommes de terres" />
        </section>
        <section className='BestSales'>
            <h2>Nos meilleures ventes</h2>
            <div className='productContainer'>
                <div className='product'>
                    <p>La Barquette</p>
                    <img src={require("../images/french-fries_barquette.jpg")} alt="Une image de frites" />
                </div>
                <div className='product'>
                    <p>Le Burger</p>
                    <img src={require("../images/hamburger.jpg")} alt="Une image de burger" />
                </div>
                <div className='product'>
                    <p>L'Américain</p>
                    <img src={require("../images/americain.jpg")} alt="Une image d'un américain succulent" />
                </div>
            </div>
        </section>
        <section className='Engagements'>
            <h2>Nos engagements</h2>
            <div className='Images'>
                <div>
                    <img src={require("../images/potatoes.jpg")} alt="Une image de patates naturelles et 100% française" />
                    <h3>Pommes de terres 100% française</h3>
                </div>
                <div>
                    <img src={require("../images/farmer.jpg")} alt="Une image de Roger, notre fermier partenaire" />
                    <h3>Des agriculteurs partenaire</h3>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Homepage;
