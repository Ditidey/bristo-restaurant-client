import React from 'react';
import Cover from '../shared/cover/Cover';
import Menu from '../shared/Menu';
import { Link } from 'react-router-dom';

const MenuCategory = ({ img, title, items }) => {
    return (
        <div className='my-20'>
            {title && <Cover img={img} title={title}></Cover>}

            <div className='grid md:grid-cols-2 gap-8 shadow-sm p-5 px-12 mt-4'>
                {
                    items.map(item => <Menu
                        key={item._id}
                        item={item}
                    ></Menu>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline bg-yellow-50 border-0 border-b-4 border-yellow-600 text-center ms-96 mt-4">Order Your Favorite Food</button>
            </Link>
        </div>
    );
};

export default MenuCategory;