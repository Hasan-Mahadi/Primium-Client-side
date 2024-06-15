import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    const isAdmin = true;


    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-green-500">
                <ul className="menu mt-10 ">










                    {
                        isAdmin ? <>
                            <li className="font-bold ">
                                <NavLink className='' to='/dashboard/cart'
                                ><FaShoppingCart></FaShoppingCart> My Cart {cart.length}
                                </NavLink>
                            </li>
                            <div className="divider"></div>
                            <li className="font-bold ">
                                <NavLink to='/dashboard/AdminHome' ><FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li className="font-bold ">
                                <NavLink to='/dashboard/additems' ><FaAd></
                                FaAd> Add Items</NavLink>
                            </li>
                            <li className="font-bold ">
                                <NavLink to='/dashboard/review' ><FaCalendar></FaCalendar>
                                    Review</NavLink>
                            </li>
                            <li className="font-bold ">
                                <NavLink to='/dashboard/bokibgs' ><FaList></
                                FaList>                     My Bookings</NavLink>
                            </li>
                            <li className="font-bold ">
                                <NavLink to='/dashboard/Allusers' ><FaUsers></
                                FaUsers>                     All Users</
                                NavLink>
                            </li>

                        </>
                            :

                            <>
                                <li className="font-bold ">
                                    <NavLink className='' to='/dashboard/cart'
                                    ><FaShoppingCart></FaShoppingCart> My Cart {cart.length}
                                    </NavLink>
                                </li>
                                <div className="divider"></div>
                                <li className="font-bold ">
                                    <NavLink to='/dashboard/userHome' ><FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li className="font-bold ">
                                    <NavLink to='/dashboard/reservtion' ><FaCalendar></
                                    FaCalendar> Reservation</NavLink>
                                </li>
                                <li className="font-bold ">
                                    <NavLink to='/dashboard/review' ><FaAd></FaAd>
                                        Review</NavLink>
                                </li>
                                <li className="font-bold ">
                                    <NavLink to='/dashboard/bokibgs' ><FaList></
                                    FaList>                     My Bookings</NavLink>
                                </li>

                            </>
                    }














                    {/*shared nav links */}

                    <div className="divider">Or</div>

                    <li className="font-bold ">
                        <NavLink to='/' ><FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li className="font-bold ">
                        <NavLink to='/prodcust' ><FaSearch></FaSearch>
                            Services</NavLink>
                    </li>

                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    )
};

export default Dashboard;