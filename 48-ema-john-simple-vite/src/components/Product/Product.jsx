import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import noImg from '../../images/no-image.jpg';

const Product = ({ addToCartUI, product }) => {
    // const { addToCart, product } = props;
    const { name, seller, price, ratings, img, } = product;
    const [resultImg, setResultImg] = useState(img);
    return (
        <div className='Product'>
            <div className="img-wrap">
                <img src={resultImg} onError={() => setResultImg(noImg)} alt='' />
            </div>
            <div className='product-info'>
                <h3>{name}</h3>
                <div>Price : ${price}</div>
                <div><small>Manufacturer : {seller}</small></div>
                <div><small>Rating : {ratings} stars</small></div>
            </div>
            <button onClick={() => { addToCartUI(product) }}>Add to Cart Font <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;