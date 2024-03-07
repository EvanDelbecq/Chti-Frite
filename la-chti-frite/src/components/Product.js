import React, {useState} from 'react';
import './Product.css';
function Product(props) {
    const [style, setStyle] = useState("product");
    console.log(style)
    const HandleClick = () =>{
        if (style !== "productdesc") setStyle("productdesc");
        else setStyle("product");
        }
        return (
            <div className={style} onClick={HandleClick}>
                <h3 id='name'>{props.name}</h3>
                <div className='productDetails'>
                    <img src={props.image} alt={props.alt} />
                    <div className='toggleContainer'>
                        <p id='description'>{props.description}</p>
                        <span id='price'>{props.price}€</span>
                    </div>
                </div>
            </div>
        );
}

export default Product;                                             