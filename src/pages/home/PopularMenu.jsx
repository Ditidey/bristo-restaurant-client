import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import Menu from '../shared/Menu';
import useMenu from '../../hooks/useMenu';

const PopularMenu = () => {
    const [data] = useMenu();
    const popularItems = data.filter(item => item.category === 'popular')
//   console.log(data)
    return (
        <section className='my-12'>
            <SectionTitle
                subheading={'Popular Items'}
                heading={'From our menu'}
            ></SectionTitle>

            <div className='grid md:grid-cols-2 gap-8 shadow-sm p-5 px-12'>
                {
                     popularItems.map(item=> <Menu
                     key={item._id}
                     item={item}
                     ></Menu>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 border-yellow-600 text-center ms-96 mt-4">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;