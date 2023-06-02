import React from 'react';
import { useContext } from 'react';
import { FaBars, FaCalendarAlt, FaCalendarCheck, FaCashRegister, FaHome, FaShoppingCart, FaStar, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthProviderContext } from '../Provider/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const DashBoard = () => {
    // const { user } = useContext(AuthProviderContext)
    // const user={role:"admin"}
    // const [loggedUser,setLoggeduser]=useState({admin:true}) 
    const [isAdmin]=useAdmin()

    // useEffect(()=>{
    //     if(user && user.email){
    //         fetch(`http://localhost:5000/user?email=${user?.email}`)
    //         .then(res=>res.json())
    //         .then(data=>setLoggeduser(data))
    //     }
        
    // }, [user])

    return (
        <div className='md:grid grid-cols-12'>
            <div className="dropdown md:hidden">
                <div className='flex my-10 px-10'>
                    <label tabIndex={0} className="btn btn-warning m-1"><FaBars className='text-4xl'></FaBars></label>
                    <div className='text-center '>
                        <h1 className='text-3xl font-bold'>BISTRO BOSS</h1>
                        <p className='font-semibold text-xl'>R e s t a u r a n t</p>
                    </div>
                </div>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-[#D1A054] rounded-box w-52 font-semibold">
                    <li><NavLink to={"/"} className={({ isActive }) =>
                        isActive ? "text-white flex items-center " : "flex items-center "
                    } > <FaHome></FaHome> <span>Home</span> </NavLink>
                    </li>
                    <li><NavLink to={"/"} className={({ isActive }) =>
                        isActive ? "text-white flex items-center  my-3" : "flex items-center  "
                    } > <FaCalendarAlt></FaCalendarAlt> <span>Reservation</span> </NavLink>
                    </li>
                    <li><NavLink to={"/"} className={({ isActive }) =>
                        isActive ? "text-white flex items-center  my-3" : "flex items-center  my-3"
                    } > <FaWallet></FaWallet> <span>Payment history</span> </NavLink>
                    </li>
                    <li><NavLink to={"/dashboard/cart"} className={({ isActive }) =>
                        isActive ? "text-white flex items-center  " : "flex items-center "
                    } > <FaShoppingCart></FaShoppingCart> <span>My cart</span> </NavLink>
                    </li>
                    <li><NavLink to={"/"} className={({ isActive }) =>
                        isActive ? "text-white flex items-center  " : "flex items-center  "
                    } > <FaStar></FaStar> <span>Add review</span> </NavLink>
                    </li>
                    <li><NavLink to={"/"} className={({ isActive }) =>
                        isActive ? "text-white flex items-center  " : "flex items-center  "
                    } > <FaCalendarCheck></FaCalendarCheck> <span>My booking</span> </NavLink>
                    </li>
                </ul>
            </div>
            <div className='md:h-[100vh] hidden md:block bg-[#D1A054] col-span-2'>
               <div className='text-center md:my-10'>
                    <h1 className='text-3xl font-bold'>BISTRO BOSS</h1>
                    <p className='font-semibold text-xl'>R e s t a u r a n t</p>
               </div>
               <div className='w-[90%] mx-auto '>
                    <ul className='font-semibold text-xl flex items-center gap-4 md:block flex-wrap space-y-3'>
                        {
                            isAdmin ? <>
                                <li>
                                    <NavLink to={"/"} className={({ isActive }) =>
                                        isActive ? "text-white flex items-center gap-6" : "flex items-center gap-6"
                                    } > <FaHome></FaHome> <span>Admin Home</span> </NavLink>

                                </li>
                                <li><NavLink to={"/dashboard/additems"} className={({ isActive }) =>
                                    isActive ? "text-white flex items-center gap-6 " : "flex items-center gap-6 "
                                } > <FaCalendarAlt></FaCalendarAlt> <span>Add Items</span> </NavLink>
                                </li>
                                <li><NavLink to={"/dashboard/manageitems"} className={({ isActive }) =>
                                    isActive ? "text-white flex items-center gap-6  " : "flex items-center gap-6  "
                                } > <FaWallet></FaWallet> <span>Manage Items</span> </NavLink>
                                </li>
                                <li><NavLink to={"/dashboard/bookings"} className={({ isActive }) =>
                                    isActive ? "text-white flex items-center  gap-6 " : "flex items-center gap-6 "
                                } > <FaShoppingCart></FaShoppingCart> <span>Manage Bookings</span> </NavLink>
                                </li>
                                <li><NavLink to={"/dashboard/users"} className={({ isActive }) =>
                                    isActive ? "text-white flex items-center  gap-6" : "flex items-center gap-6 "
                                } > <FaStar></FaStar> <span>All User</span> </NavLink>
                                </li>
                            </>
                            :<>
                                    <li>
                                        <NavLink to={"/"} className={({ isActive }) =>
                                            isActive ? "text-white flex items-center gap-6" : "flex items-center gap-6"
                                        } > <FaHome></FaHome> <span>Home</span> </NavLink>

                                    </li>
                                    <li><NavLink to={"/"} className={({ isActive }) =>
                                        isActive ? "text-white flex items-center gap-6 " : "flex items-center gap-6 "
                                    } > <FaCalendarAlt></FaCalendarAlt> <span>Reservation</span> </NavLink>
                                    </li>
                                    <li><NavLink to={"/"} className={({ isActive }) =>
                                        isActive ? "text-white flex items-center gap-6  " : "flex items-center gap-6  "
                                    } > <FaWallet></FaWallet> <span>Payment history</span> </NavLink>
                                    </li>
                                    <li><NavLink to={"/dashboard/cart"} className={({ isActive }) =>
                                        isActive ? "text-white flex items-center  gap-6 " : "flex items-center gap-6 "
                                    } > <FaShoppingCart></FaShoppingCart> <span>My cart</span> </NavLink>
                                    </li>
                                    <li><NavLink to={"/"} className={({ isActive }) =>
                                        isActive ? "text-white flex items-center  gap-6" : "flex items-center gap-6 "
                                    } > <FaStar></FaStar> <span>Add review</span> </NavLink>
                                    </li>
                                    <li><NavLink to={"/"} className={({ isActive }) =>
                                        isActive ? "text-white flex items-center gap-6 " : "flex items-center  gap-6"
                                    } > <FaCalendarCheck></FaCalendarCheck> <span>My booking</span> </NavLink>
                                    </li></>
                        }
                        {/* <li>
                            <NavLink to={"/"} className={({ isActive}) =>
                            isActive ? "text-white flex items-center gap-6" : "flex items-center gap-6"
                        } > <FaHome></FaHome> <span>Home</span> </NavLink>

                        </li>
                        <li><NavLink to={"/"} className={({ isActive}) =>
                            isActive ? "text-white flex items-center gap-6 " : "flex items-center gap-6 "
                        } > <FaCalendarAlt></FaCalendarAlt> <span>Reservation</span> </NavLink>
                        </li>
                        <li><NavLink to={"/"} className={({ isActive}) =>
                            isActive ? "text-white flex items-center gap-6  " : "flex items-center gap-6  "
                        } > <FaWallet></FaWallet> <span>Payment history</span> </NavLink>
                        </li>
                        <li><NavLink to={"/dashboard/cart"} className={({ isActive}) =>
                            isActive ? "text-white flex items-center  gap-6 " : "flex items-center gap-6 "
                        } > <FaShoppingCart></FaShoppingCart> <span>My cart</span> </NavLink>
                        </li>
                        <li><NavLink to={"/"} className={({ isActive}) =>
                            isActive ? "text-white flex items-center  gap-6" : "flex items-center gap-6 "
                        } > <FaStar></FaStar> <span>Add review</span> </NavLink>
                        </li>
                        <li><NavLink to={"/"} className={({ isActive}) =>
                            isActive ? "text-white flex items-center gap-6 " : "flex items-center  gap-6"
                        } > <FaCalendarCheck></FaCalendarCheck> <span>My booking</span> </NavLink>
                        </li> */}
                    </ul>
                    <div className="divider"></div>
               </div>
                

            </div>
            <div className='h-[100vh]  col-span-10'>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashBoard;