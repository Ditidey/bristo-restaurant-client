import React, { useState } from 'react';
import imgCover from '../../assets/shop/banner2.jpg';
import Cover from '../shared/cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useTitle from '../../components/useTitle';
import useMenu from '../../hooks/useMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    useTitle('Order-Food');
    const categories = ['pizza', 'dessert', 'salad', 'soup', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [menu] = useMenu();
     
    console.log(category)
    const  drinksItems = menu.filter(item => item.category === 'drinks')
    const pizzaItems = menu.filter(item => item.category === 'pizza')
    const saladItems = menu.filter(item => item.category === 'salad')
    const soupItems = menu.filter(item => item.category === 'soup')
    const dessertItems = menu.filter(item => item.category === 'dessert')
    const [tabIndex, setTabIndex] = useState(initialIndex);

    return (
        <div className='mb-10'>
            <Cover img={imgCover} title={"Order Food"}></Cover>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Pizza</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={pizzaItems}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={dessertItems}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={saladItems}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={soupItems}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={drinksItems}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;