import React from 'react';
 import img from '../../assets/home/chef-service.jpg';
const BristoSec = () => {
    return (
        <div className="my-12 px-36 py-32"  style={{backgroundImage: `url(${img})`, height: '450px', backgroundSize: 'cover'}}>
            <div className='bg-white text-center py-6 px-8 space-y-3'>
                <h3 className='uppercase text-3xl'>Bristo Boss</h3>
                <p>Bristol Boss Restaurant is an exquisite culinary haven nestled in the heart of downtown Bristol. With its elegant ambiance, attentive staff, and a menu that tantalizes the taste buds, this restaurant stands as a beacon of fine dining in the city. From the moment you step through its doors</p>
            </div>
        </div>
    );
};

export default BristoSec;