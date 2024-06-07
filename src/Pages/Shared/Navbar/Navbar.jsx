import { Link, NavLink } from "react-router-dom";
import Header from "../Header";
import './Navbar.css';
import { useContext } from "react";
import { AuthContext } from "../../../providers/Authproviders";


const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    const handleLogOut = () => {
        logout()
        .then(() => {})
        .catch(error => console.error(error));

    }

    const navOption =
        <>
            <li>

                <NavLink to="/"
                    title='abouts' className={({ isActive }) =>
                        (isActive ? 'text-blue-700' : '')}  ><p className="font-bold">Home</p></NavLink>
            </li>

            <li>


                <ul className=" flex">
                    <li className="font-bold"><Link to="/services">Services</Link></li>
                    <li className="font-bold"><Link to="about">About</Link></li>
                    <li className="font-bold"><Link to="blogs">Blogs</Link></li>
                </ul>

            </li>

            <li className="font-bold"><Link to="projects">Projects</Link></li>
            <li className="font-bold"><Link to="secret">sontact</Link></li>


        </>
    return (
        <>
            <Header></Header>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <Link to='donats'>

                        <a className="btn btn-ghost  btn btn-outline btn-accent 
                            bg-black font-bold text-xl">Donate Us</a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">



                    {
                        user ? <>
                        <span>{user?.displayName}</span>
                            <button onClick={handleLogOut} className="btn btn-ghost  btn btn-outline  btn-accent  bg-green font-bold text-xl">logOut</button>
                        </>: <>
                                <Link className="btn btn-ghost  btn btn-outline btn-accent  bg-black font-bold text-xl " to="logins">Login</Link>
                        </>
                    }












                </div>
            </div>
        </>
    );
};

export default Navbar;