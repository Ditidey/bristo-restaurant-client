import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import img1 from '../../assets/menu/pizza-bg.jpg';
import img2 from '../../assets/menu/salad-bg.jpg';
import img3 from '../../assets/menu/soup-bg.jpg';
const Recommed = () => {
    return (
        <section>
            <SectionTitle
                subheading={'Should Try'}
                heading={'chef recommends'}
            ></SectionTitle>

            <div className='grid md:grid-cols-3 gap-2'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Salads
                        </h2>
                        <p>Every dish that emerges from the kitchen is a masterpiece, meticulously crafted with the finest ingredients and an unwavering commitment to perfection.</p>

                    </div>
                    <div className="card-actions justify-end px-40 pb-4">
                        <button className="btn btn-outline bg-yellow-200 border-0 border-b-4 border-yellow-600 text-center ms-96 mt-4">Add to Cart</button>
                    </div>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Salads
                        </h2>
                        <p>The menu is a symphony of innovative creations and classic favorites, showcasing the chef's unrivaled expertise and a deep passion for gastronomy.</p>

                    </div>
                    <div className="card-actions justify-end px-40 pb-4">
                        <button className="btn btn-outline bg-yellow-200 border-0 border-b-4 border-yellow-600 text-center ms-96 mt-4">Add to Cart</button>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Soup
                        </h2>
                        <p>The ambiance is a harmonious blend of sophistication and warmth, with tastefully curated decor that sets the stage for an unforgettable evening.</p>


                    </div>
                    <div className="card-actions justify-end px-40 pb-4">
                        <button className="btn btn-outline bg-yellow-200 border-0 border-b-4 border-yellow-600 text-center ms-96 mt-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recommed;