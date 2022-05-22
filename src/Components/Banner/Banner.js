import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from "../../Images/banner.jpg";

const Banner = () => {
    return (
        <section className='banner-area bg-no-repeat bg-center py-52 lg:py-72 text-center' style={{ backgroundImage: "url(" + bannerImg + ")" }}>
            <h2 className='text-white text-5xl xl:text-7xl font-bold uppercase'>First <br /> and Furious</h2>
            <span className='py-4 text-white block'>Smart & Courageous</span>
            <Link to='/inventory' className='mt-8 button button-outline-white inline-block'>Our Products</Link>
        </section>
    );
};

export default Banner;