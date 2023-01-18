import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import noImg from '../../images/no-image.jpg';
import './OrderItem.css';

const OrderItem = ({ item, minusItem, deleteItem }) => {
    const { id, img, name, price, shipping, quantity } = item;
    const [resultImg, setResultImg] = useState(img);
    return (
        <div className='order-item-container'>
            <img className='order-img' src={resultImg} onError={() => setResultImg(noImg)} alt="img" />
            <div className="order-info">
                <div>{name}</div>
                <div>Price : <span className='text-orange'>${price}</span></div>
                <div><small>Shipping : <span className='text-orange'>${shipping}</span></small></div>
                <div><small>Quantity : <span className='text-orange'>{quantity}</span></small></div>
            </div>
            <button onClick={() => minusItem(id)} className="order-delete-btn">
                <FontAwesomeIcon className='order-delete-icon' icon={faSquareMinus} />
            </button>
            <button onClick={() => deleteItem(id)} className="order-delete-btn">
                <FontAwesomeIcon className='order-delete-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default OrderItem;