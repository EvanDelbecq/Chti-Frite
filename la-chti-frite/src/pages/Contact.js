import React from 'react';
import Navbar from '../components/Navbar.js';
import './Contact.css';


class Contact extends React.Component {
  render() {
    return (
      <div className='Contact'>
        <Navbar />
        <header>
          <h1>Contactez Nous</h1>
        </header>
        <div className='Map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.2375557107977!2d2.3445859696833327!3d48.859159580537565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f7afde613%3A0x324fbd8bf30894ec!2s69%20Rue%20des%20Deux%20Boules%2C%2075001%20Paris!5e0!3m2!1sen!2sfr!4v1709646469874!5m2!1sen!2sfr" width="100%" height="250" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='ContactDiv'>
          <div className='ContactInfo'>
            <ul>
              <li>
                <i class="fa-solid fa-location-dot"></i>
                <span>69 Rue des Deux Boules, 75001 Paris</span>
              </li>
              <li>
                <i class="fa-solid fa-phone"></i>
                <span>01 23 45 67 89</span>
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i>
                <span>lachtifrite@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className='Form'>
          <form>
            <input type='text' id='name' name='name' placeholder='Nom' />
            <input type='text' id='email' name='email' placeholder='Email' />
            <input type='text' id='subject' name='subject' placeholder='Message' />
            <input type='submit' value='Envoyer' />
          </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
