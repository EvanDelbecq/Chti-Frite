import './App.css';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="Homepage">
        <header >
            <div className='title'>
                <img src={require("./images/Logo Chti'frite.png")} alt="Logo" />
                <h1>La Chti'frite</h1>
                <h2>La frite traditionelle du Nord</h2>
            </div>
        </header>
        <section className='AboutUs'>
            <div>
                <h2>Qui sommes-nous ?</h2>
                <p>Chez Chti'Frite, nous sommes passionnés par la cuisine du Nord, et chaque plat que nous préparons est une célébration de la tradition culinaire ch'ti. Notre équipe dévouée s'efforce de vous offrir une expérience gastronomique inoubliable, où chaque bouchée vous transporte directement dans les rues animées de Lille.</p>
            </div>
            <img src={require("./images/peel-the-potato.jpg")} alt="Un home qui épluche des pommes de terres" />
        </section>
        <section className='BestSales'>
            <h2>Nos meilleures ventes</h2>
            <div className='productContainer'>
                <div className='product'>
                    <p>La Barquette</p>
                    <img src={require("./images/french-fries_barquette.jpg")} alt="Des Frites" />
                </div>
                <div className='product'>
                    <p>Le Burger</p>
                    <img src={require("./images/hamburger.jpg")} alt="Un Burger" />
                </div>
                <div className='product'>
                    <p>L'Américain</p>
                    <img src={require("./images/americain.jpg")} alt="Un Américain" />
                </div>
            </div>
        </section>
        <section className='Engagements'>
            <h2>Nos engagements</h2>
            <div className='Images'>
                <div>
                    <img src={require("./images/potatoes.jpg")} alt="Des patates naturelles et 100% française" />
                    <h3>Pommes de terres 100% française</h3>
                </div>
                <div>
                    <img src={require("./images/farmer.jpg")} alt="Roger, notre fermier partenaire" />
                    <h3>Des agriculteurs partenaire</h3>
                </div>
            </div>
        </section>
    </main>
    </div>
  );
}

export default App;
