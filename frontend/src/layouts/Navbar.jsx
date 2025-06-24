import { Link } from "react-router-dom";


const Navbar = ({logo}) => {
    const dropdownItems = ["Earrings", "Rings", "Necklaces", "Bracelets", "Jewellery Sets"];

    return (
        <div className="text-center w-full bg-gradient-to-b from-[#7E46AC] to-[#9546AC] text-white   z-50 pb-4 relative h-[195px]">
            {/* Top Banner */}
            <div className="top-deals h-[37px] text-[13px] bg-[#D0C3F1] text-[#7D46AC] flex justify-center items-center font-semibold  tracking-[0.2rem] uppercase">
                Free Jewellery Organizer worth ₹400 on orders above Rs. 1500
            </div>

            {/* Logo + Icons */}
            <div className="flex justify-between items-center py-4 px-7">
                <i className="fa-solid fa-magnifying-glass text-xl" />
                <img src={logo} alt="Logo" className="h-6" />
                <div className="flex gap-6 text-xl">
                    <i className="fa-regular fa-heart" />
                    <i className="fa-regular fa-user" />
                    <i className="fa-solid fa-cart-shopping" />
                </div>
            </div>

            {/* Nav Links */}
            <ul className="site-nav flex justify-center gap-6 flex-wrap text-sm uppercase tracking-wider font-medium relative z-50">
                {/* Hover Dropdown for All Jewellery */}
                <li className="relative group">
                    <a
                        href="#"
                        className="flex items-center gap-1 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-black after:w-0 font-normal group-hover:after:w-full after:transition-all after:duration-300 text-[16px] tracking-[0.2rem]"
                    >
                        All Jewellery
                        <svg
                            className="ml-1 w-3 h-3"
                            viewBox="0 0 28 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M1.57 1.59L14.33 14.36L27.1 1.59" />
                        </svg>
                    </a>
                    <ul className="absolute top-full left-[-20px] w-52 bg-white text-black rounded shadow-lg text-left hidden group-hover:block z-20 mt-1">
                        {dropdownItems.map((item, i) => (
                            <li key={i} className="hover:bg-gray-200 px-4 py-2 ">
                                <a href="#" className="">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </li>

                {/* Other Nav Items */}
                {[
                    "Gift Boxes",
                    "Fresh Drops",
                    "Couple Sets",
                    "Sunglasses",
                    "Hats & Caps",
                    "Hair Accessories"
                ].map((item, i) => (
                    <li key={i}>
                        <a
                            href="#"
                            className="relative after:content-[''] after:absolute after:left-0 font-normal after:bottom-[-2px] after:h-[2px] after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-300 block text-[16px] tracking-[0.2rem]"
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Gender Links */}
            <div className="uppercase text-sm tracking-widest font-bold mt-4">
                <Link to="/">Woman</Link> | <Link to="/pages/mens-accessories">Man</Link>
            </div>
        </div>
    );
};

export default Navbar;
