import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <ul className='nav-left'>
          <li id='logo'>
            <img src="./Logo Chti'frite.png" alt="Logo" />
            <a href="#home">LA CHTI'FRITE</a>
          </li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <ul className='nav-right'>
          <li><i class="fa-solid fa-location-dot"></i></li>
          <li><button>Se Connecter</button></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
