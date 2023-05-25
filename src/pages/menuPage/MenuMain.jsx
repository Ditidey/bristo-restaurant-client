import React from 'react';
import useTitle from '../../components/useTitle';
import Cover from '../shared/cover/Cover';
import bgImg from '../../assets/menu/banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle';
import MenuCategory from './MenuCategory';

const MenuMain = () => {
    useTitle('Our Menu');
    const [menu] = useMenu();
    const offerItems = menu.filter(item => item.category === 'offered')
    const pizzaItems = menu.filter(item => item.category === 'pizza')
    const saladItems = menu.filter(item => item.category === 'salad')
    const soupItems = menu.filter(item => item.category === 'soup')
    const dessertItems = menu.filter(item => item.category === 'dessert')
    return (
        <div className='py-16'> 
            <Cover
            img={bgImg}
            title={'Our Menu'}
            ></Cover>
           {/* offer */}
           <SectionTitle heading={"Today's offer"} subheading={"Don't miss"}></SectionTitle>
           <MenuCategory items={offerItems}></MenuCategory>
            
             {/* dessert */}
           <MenuCategory items={dessertItems} img={dessertImg} title={"dessert"}></MenuCategory>

           {/* pizza */}
           <MenuCategory items={pizzaItems} img={pizzaImg} title={"pizza"}></MenuCategory>

            {/* salad */}
           <MenuCategory items={saladItems} img={saladImg} title={"salad"}></MenuCategory>

           {/* soup */}
           <MenuCategory items={soupItems} img={soupImg} title={"soup"}></MenuCategory>
        </div>
    );
};

export default MenuMain;