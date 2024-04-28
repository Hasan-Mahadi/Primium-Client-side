import Header from "../Header";


const Navbar = () => {

    const navOption =
        <>
            <li><a>Home</a></li>
            <li>
                <details>
                    <summary>More</summary>
                    <ul className="p-2">
                        <li><a>About</a></li>
                        <li><a>Blogs</a></li>
                    </ul>
                </details>
            </li>
            <li><a>Services</a></li>
            <li><a>Projects</a></li>

            <li><a>Contact Us</a></li>
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
                    <a className="btn btn-ghost  btn btn-outline btn-accent bg-black font-bold text-xl">Donate Us</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="font-bold text-xl btn btn-outline btn-accent bg-black ">Login</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;