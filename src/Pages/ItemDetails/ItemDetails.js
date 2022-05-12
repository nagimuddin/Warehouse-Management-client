import React from 'react';
import { Link } from 'react-router-dom';

const ItemDetails = () => {
    return (
        <div>
            <h2>Item details</h2>
            <div className='text-center'>
            <Link to="/checkout">
                <button className='btn btn-info'>Proceed Checkout</button>
            </Link>
            </div>
        </div>
    );
};

export default ItemDetails;