import Logo from "../src/assets/Logo.png"

const Navbar = () => {
    return (
        <div className=" bg-gradient-to-br from-[#091646] to-[#491906]">
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        {/* <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul> */}
                    </div>
                    <a className=""><img className="md:h-16 md:w-16" src={Logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {/* <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li><a>Item 3</a></li>
                </ul> */}
                </div>
                <div className="navbar-end">
                    <a className="btn btn-secondary btn-outline">Logout</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;