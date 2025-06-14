import { useEffect, useState } from "react";
import logo from "../assets/logo.webp";

const Navbar = () => {
    const messages = [
        "Free Standard Delivery Above Rs. 449",
        "Free Jewellery Organizer worth ₹400 on orders above Rs. 1500"
    ];

    const [index, setIndex] = useState(0);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % messages.length);
                setAnimate(false);
            }, 400); // animation time
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Top Deals Banner */}
            <div className="top-deals h-8 bg-[#D0C3F1] w-full absolute top-0 text-center overflow-hidden flex justify-center items-center z-50">
                <p className={`text-[#7D46AC] uppercase font-semibold text-[12px] tracking-[0.13rem] transition-transform duration-500 ease-in-out transform ${
                    animate ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
                }`}>
                    {messages[index]}
                </p>
            </div>

            {/* Navbar */}
            <nav className="flex flex-col justify-center items-center h-40 bg-gradient-to-b from-[#7E46AC] to-[#9546AC] text-white px-7 py-10 mt-8">

                {/* Top row */}
                <div className="nav-header-container flex justify-between items-center w-[97%]">
                    <div className="search">
                        <i className="fa-solid fa-magnifying-glass text-xl"></i>
                    </div>
                    <div className="logo">
                        <img src={logo} alt="Logo" className="h-5" />
                    </div>
                    <div className="icons tracking-[1rem] text-xl">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-user"></i>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>

                {/* Nav links */}
                <ul className="nav-items-container flex gap-8 uppercase text-[15px] tracking-widest flex-wrap mx-5 my-3">
                    {["All Jewellery", "Gift Boxes", "Fresh Drops", "Sunglasses", "Couple Sets", "Hats & Caps", "Hair Accessories"].map((item, i) => (
                        <li key={i} className="inline-block relative group cursor-pointer">
                            <a
                                href="#"
                                className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white group-hover:after:w-full after:transition-all after:duration-500 tracking-[0.2rem] text-[15px]"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Gender */}
                <div className="nav-gender uppercase text-[14px] tracking-[0.3rem] font-bold">
                    <a href="">Woman</a>  |  <a href="">Man</a>
                </div>
                
            </nav>
        </>
    );
};

export default Navbar;
