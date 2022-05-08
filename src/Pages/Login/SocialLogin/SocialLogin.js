import React from 'react';
import google from '../../../images/google-logo.png';

const SocialLogin = () => {
    return (
        <div>
           <div className='d-flex align-items-center w-50 mx-auto'>
               <div style={{height: '1px'}} className='bg-primary w-50'></div>
               <p className='text-primary mt-2 px-2'>or</p>
               <div style={{height: '1px'}} className='bg-primary w-50'></div>
           </div>
           <div>
               <button className='btn btn-primary d-flex my-3 align-items-center ps-4 w-50 mx-auto'>
                   <img className='me-2' src={google} alt="" />
                   Google Sign In
                   </button>
           </div>
        </div>
    );
};

export default SocialLogin;