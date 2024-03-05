import React from 'react';
import './Product.css';
function Product() {
    return (
        <div className='product'>
            <p>Le Burger</p>
            <img src={require("../images/hamburger.jpg")} alt="Une image de burger" />
        </div>
    );
}

export default Product;