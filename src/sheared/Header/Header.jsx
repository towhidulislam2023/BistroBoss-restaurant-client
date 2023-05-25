import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../../assets/icon/cart.png';
const Header = () => {
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">CONTACT US</Link></li>
        <li><Link to="/">DASHBOARD</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/shop/salad">Our Shop</Link></li>
        <li><Link><img className='w-12' src={cart} alt="" /></Link></li>
        <li> <button>SIGN OUT</button> </li>
        <li> <div className="tooltip tooltip-bottom" data-tip="hello">
            <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                    <span>MX</span>
                </div>
            </div>
        </div></li>
    </>
    return (
        <div className="navbar fixed z-10 bg-black bg-opacity-70 max-w-screen-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white">
                        {navOptions}
                    </ul>
                </div>
                <Link className="text-2xl text-white ml-3  setfont font-extrabold text-center" to="/"><span>BISTRO BOSS</span> <br /><span className='space-x-5 hidden md:block'>R e s t a u r a n t</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    {navOptions}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <Link className="btn" to="/">Get started</Link>
            </div> */}
        </div>

    );
};

export default Header;