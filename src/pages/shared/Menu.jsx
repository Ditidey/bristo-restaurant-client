import React from 'react';

const Menu = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className='flex space-x-2'>
            <img src={image} alt="" style={{borderRadius: '0 200px 200px 200px'}} className='w-[104px]'/>
            <div>
                <h3>{name} -------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default Menu;