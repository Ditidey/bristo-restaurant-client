import React from 'react';
import { FaAdjust, FaBars, FaBook, FaCalendarAlt, FaHome, FaShoppingBasket, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();
    // const admin = true;
    const [isAdmin] = useAdmin();
    console.log(isAdmin)

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  px-8">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side bg-yellow-700 ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            isAdmin ? <>
                                <li><NavLink to='/dashboard/adminhome'><FaHome></FaHome> Admin Home</NavLink></li>                                
                                <li><NavLink to='/dashboard/manageitems'><FaBars></FaBars> Manage items</NavLink></li>
                                <li><NavLink to='/dashboard/admin'><FaBook></FaBook> Manage Booking</NavLink></li>
                                <li><NavLink to='/dashboard/alluser'> <FaUsers></FaUsers>  Users</NavLink></li>
                                <li><NavLink to='/dashboard/addItem'> <FaAdjust></FaAdjust> Add Items</NavLink></li>
                                 
                            </>
                                : <>
                                    <li><NavLink to='/dashboard/userhome'><FaHome></FaHome> User Home</NavLink></li>
                                    <li><NavLink to='/dashboard/reservations'><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                                    <li><NavLink to='/dashboard/history'><FaWallet></FaWallet> Payment History</NavLink></li>
                                    <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart> My Cart
                                        <span className='badge'>+{cart.length}</span>
                                    </NavLink></li>
                                    
                                </>
                        }
                        <div className='divider'></div>
                                <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                                <li><NavLink to='/menu'><FaBars></FaBars> Menu</NavLink></li>
                                <li><NavLink to='/order/salad'><FaShoppingBasket></FaShoppingBasket>  Our order</NavLink></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;