import React from 'react';
import './Navbar.css';
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <ul className='nav-left'>
          <li id='logo'>
            <Link to="/Chti-Frite/">
              <img src={require("../images/Logo Chti'frite.png")} alt="Logo" />
              <span>LA CHTI'FRITE</span>
            </Link>
          </li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <ul className='nav-right'>
          <li><a href='https://maps.app.goo.gl/B4DVnjkpFoenChLC8' target='-blank'><i class="fa-solid fa-location-dot"></i></a></li>
          <li><button>Se Connecter</button></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
