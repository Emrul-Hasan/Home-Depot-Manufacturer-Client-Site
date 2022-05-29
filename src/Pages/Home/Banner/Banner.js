import React from 'react';
import banner1 from '../../../images/banner (4).png';
import './Banner.css';


const Banner = () => {

    return (
        <section className='bg-primary text-white'>
            <div className='banner-body'>
                <div>
                    <h2 className='banner-title text-teal-200'>Home Depot Manufacturer LTD.</h2>
                    <p className='banner-text text-2xl'>It's simple to get your Most Wanted tools. Our delivery crew is open to talking with you at any time.</p>
                </div>
                <div className='banner-img'>
                    <img src={banner1} alt="banner" />
                </div>
            </div>
        </section>
    );
};

export default Banner;