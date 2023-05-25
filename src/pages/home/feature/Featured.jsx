import React from 'react';
import './featured.css';
import img from '../../../assets/home/featured.jpg';
import SectionTitle from '../../../components/SectionTitle';

const Featured = () => {
    return (
        <section className='featured my-12 pt-12  '>
            <SectionTitle
                subheading={'Check it out now'}
                heading={'Featured Items'}
            ></SectionTitle>

            <div className='md:flex justify-center items-center py-20 px-44 bg-slate-500 opacity-40 '>
                <div>
                    <img src={img} alt="" className='w-2/3'/>
                </div>
                <div className='text-white space-y-3 '>
                    <p>Sep 22, 2023</p>
                    <p className='uppercase'>Where Can I get some?</p>
                    <p>Featured Recipes! Whether you are looking for plant-based recipes, easy weeknight dinner recipes, or fast and fresh recipes, here is a delicious selection!</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;