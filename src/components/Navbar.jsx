import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowRightSLine } from "react-icons/ri";
import { LuHome } from "react-icons/lu";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { SlNote } from "react-icons/sl";
import { IoChatboxOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import Logo from "../../public/Logo.svg";

export default function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.pageYOffset;
            if (scrollPos > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLinkClick = () => {
        setClick(false);
    };

    return (
        <nav className={`px-5 lg:px-18 flex w-full top-0 items-center justify-between fixed duration-300 ${isScrolled ? "bg-primary-90" : "bg-primary-90"}`}>
            <img src={Logo} alt="logo" />
            <ul className="hidden lg:flex text-secondary-90 gap-18 lg:text-xl font-medium leading-normal">
                <Link to="/" onClick={handleLinkClick}>
                    <li className={`${location.pathname === "/" ? "border-b-2 border-secondary-90" : ""}`}>Home</li>
                </Link>
                <Link to="/About" onClick={handleLinkClick}>
                    <li className={`${location.pathname === "/About" ? "border-b-2 border-secondary-90" : ""}`}>About</li>
                </Link>
                <Link to="/Register" onClick={handleLinkClick}>
                    <li className={`${location.pathname === "/Register" ? "border-b-2 border-secondary-90" : ""}`}>Register Now</li>
                </Link>
                <Link to="/Contact" onClick={handleLinkClick}>
                    <li className={`${location.pathname === "/Contact" ? "border-b-2 border-secondary-90" : ""}`}>Contact Us</li>
                </Link>
                <Link to="/FAQ" onClick={handleLinkClick}>
                    <li className={`${location.pathname === "/FAQ" ? "border-b-2 border-secondary-90" : ""}`}>FAQ</li>
                </Link>
            </ul>

            <div className="block lg:hidden relative">
                <button onClick={handleClick} className="text-secondary-90">
                    {click ? "" : <RxHamburgerMenu size={24} />}
                </button>
                {click && <div className="fixed inset-0 bg-black opacity-50"></div>}

                <div className={`fixed px-5 py-4 top-0 right-0 h-full w-2/4 bg-secondary-70 shadow-lg transition-transform ${click ? 'translate-x-0 duration-500' : 'translate-x-full duration-500'}`}>
                    <div className="flex justify-between">
                        <img src={Logo} alt="logo" className="h-11" />
                        <button onClick={handleClick} className="text-primary-50">
                            <RiArrowRightSLine size={30} />
                        </button>
                    </div>

                    <ul className="flex flex-col items-start text-primary-50 gap-8 font-Metropolis mt-18 text-base font-medium leading-tight">
                        <Link to="/" onClick={handleLinkClick} className="flex items-center gap-5">
                            <LuHome size={24} />
                            <li className={`${location.pathname === "/" ? "border-b-2 border-primary-50" : ""}`}>Home</li>
                        </Link>
                        <Link to="/About" onClick={handleLinkClick} className="flex items-center gap-5">
                            <IoMdInformationCircleOutline size={25} />
                            <li className={`${location.pathname === "/About" ? "border-b-2 border-primary-50" : ""}`}>About</li>
                        </Link>
                        <Link to="/Register" onClick={handleLinkClick} className="flex items-center gap-5">
                            <SlNote size={24} />
                            <li className={`${location.pathname === "/Register" ? "border-b-2 border-primary-50" : ""}`}>Register Now</li>
                        </Link>
                        <Link to="/Contact" onClick={handleLinkClick} className="flex items-center gap-5">
                            <IoChatboxOutline size={24} />
                            <li className={`${location.pathname === "/Contact" ? "border-b-2 border-primary-50" : ""}`}>Contact Us</li>
                        </Link>
                        <Link to="/FAQ" onClick={handleLinkClick} className="flex items-center gap-5">
                            <GoQuestion size={24} />
                            <li className={`${location.pathname === "/FAQ" ? "border-b-2 border-primary-50" : ""}`}>FAQ</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
