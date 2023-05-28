import { Link } from 'react-router-dom';
import logo from '../../../public/download (1).png';
import { useContext } from 'react';
import { contextProvider } from '../../Authprovider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../hooks/useCart';

const NavBar = () => {
    const { user, logoutUser } = useContext(contextProvider);
    const [cart] = useCart();

    const handleLogout = () => {
        logoutUser()
            .then(() => { })
            .catch(e => console.log(e))
    }
    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        <li><Link to='/dashboard/mycart'>
            <button className="btn gap-2">
               <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">+{cart.length || 0}</div>
            </button></Link></li>

        {
            user ? <><button onClick={handleLogout} className='btn'>Logout</button></> :
                <>    <li><Link to='/login'>Login</Link></li></>
        }
    </>
    return (
        <div>
            <div className="navbar fixed z-10 opacity-60 bg-black text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <img src={logo} alt="" className='w-10 h-10 rounded-full ' />
                    <a className="btn btn-ghost normal-case text-xl">Bristo Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;