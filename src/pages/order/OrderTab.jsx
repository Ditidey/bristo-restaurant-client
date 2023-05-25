import React from 'react';
import CardFood from '../../components/CardFood';

const OrderTab = ({ items }) => {
    return (
        <div className='grid md:grid-cols-3 gap-2'>
            {
                items.map(item => <CardFood key={item._id} item={item}></CardFood>)
            }
        </div>
    );
};

export default OrderTab;