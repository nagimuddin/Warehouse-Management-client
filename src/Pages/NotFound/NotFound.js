import React from 'react';
import notfound from '../../images/notfound.png';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='error-container'>
            <h1 className='error-text'>OPS!!!</h1>
            <h2 className='error-text'>Your searching rout is not exist. <br /> Please search a valid path!</h2>
            <img className='error-img' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;