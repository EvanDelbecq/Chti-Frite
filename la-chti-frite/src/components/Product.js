import React from 'react';
import './Product.css';
function Product(props) {
    return (
        <div className='product'>
            <p>{props.name}</p>
            <img src={props.image} alt={props.alt} />
        </div>
    );
}

export default Product;                                             