import React from 'react';

const CardFood = ({ item }) => {
    const { image, name, price, recipe } = item;
    return (

        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='bg-slate-800 text-white absolute right-0 px-4 mt-6 mr-6 rounded-sm'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>

                <div className="card-actions justify-end px-40 pb-4">
                    <button className="btn btn-outline bg-slate-300 text-yellow-600 border-0 border-b-4 border-yellow-600 text-center ms-96 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>

    );
};

export default CardFood;