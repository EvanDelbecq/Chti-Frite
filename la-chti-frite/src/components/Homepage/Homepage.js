import React from 'react';
import './Homepage.css';

function Homepage() {
  return (
    <div className="Homepage">
        <header>
            <div className='title'>
                <img src="./Logo Chti'frite.png" alt="Logo" />
                <h1>La Chti'frite</h1>
                <h2>La frite traditionelle du Nord</h2>
            </div>
        </header>
        <section className='AboutUs'>
            <div>
                <h2>Qui sommes-nous ?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit  libero ac orci aliquet sodales. Praesent tincidunt imperdiet eros, nec  euismod magna tempor quis. Cras feugiat dictum eros, at consectetur elit  vestibulum vel. Donec ut massa tristique, congue magna et, sodales  nunc. Ut et nibh nisl. In aliquam, eros sit amet commodo dictum, neque  ipsum pretium metus, eu sagittis dui massa in orci.</p>
            </div>
            <img src="./peel-the-potato.jpg" alt="Un home qui épluche des pommes de terres" />
        </section>
        <section className='BestSales'>
            <h2>Nos meilleures ventes</h2>
            <div>
                <img src="./french-fries_barquette.jpg" alt="Une image de frites" />
                <img src="./hamburger.jpg" alt="Une image de burger" />
                <img src="./americain.jpg" alt="Une image d'un américain succulent" />
            </div>
        </section>
        <section className='Engagements'>
            <h2>Nos engagements</h2>
            <div className='Images'>
                <div>
                    <img src="./potatoes.jpg" alt="Une image de patates naturelles et 100% française" />
                    <h3>Pommes de terres 100% française</h3>
                </div>
                <div>
                    <img src="./farmer.jpg" alt="Une image de Roger, notre fermier partenaire" />
                    <h3>Des agriculteurs partenaire</h3>
                </div>
            </div>
        </section>
        <footer>

        </footer>
    </div>
  );
}

export default Homepage;
