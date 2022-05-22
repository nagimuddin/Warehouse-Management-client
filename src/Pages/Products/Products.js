import React from 'react';
import { Link } from 'react-router-dom';
import ProductItem from '../ProductItem/ProductItem';

const Products = () => {
    return (
        <section className='py-32'>
            <div className='mb-16 container mx-auto text-center px-8'>
                <span className="mb-2 font-bold text-xl text-center text-indigo-600 block uppercase">AutoMobile</span>
                <h2 className='text-4xl text-black uppercase font-bold'>
                <span className='text-indigo-600'>Our</span> Service
                </h2>
            </div>
            <div className="container max-w-7xl mx-auto">
                <div className="flex flex-wrap">
                    <ProductItem />
                </div>
                <div className="mt-20 text-center">
                    <Link to='/manage'  className="button button-black inline-block">Manage Inventories</Link>
                </div>
            </div>
        </section>
    );
};

export default Products;