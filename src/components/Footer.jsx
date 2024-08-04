import Logo from "../../public/Logo.svg";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="px-5 lg:px-18 py-10 bg-secondary-90 w-full text-primary-50">
            <div
                className="flex flex-col lg:flex-row lg:justify-between lg:mb-40 mb-20 gap-10 lg:gap-0 justify-center items-center text-center lg:items-start lg:text-start">
                <div className="flex flex-col items-center lg:items-start gap-7 lg:w-3/12 md:w-8/12">
                    <img src={Logo} alt="logo"/>
                    <p
                        className="text-base font-medium leading-tight font-Metropolis">
                        Sustainable Technologies for a Better World: Global Collaboration in Innovation and Creativity to Achieve the SDGs
                    </p>
                </div>
                <ul>
                    <h1 className="font-bold text-2xl leading-7 mb-4">Pages</h1>
                    <div className="text-sm lg:text-base font-medium leading-tight font-Metropolis gap-4 flex flex-col">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/About"><li>About</li></Link>
                        <Link to="/Register"><li>Register Now</li></Link>
                        <Link to="/Contact"><li>Contact Us</li></Link>
                        <Link to="/FAQ"><li>FAQ</li></Link>
                    </div>
                </ul>
                <div>
                    <h1 className="font-bold text-2xl leading-7 mb-4">Contact Us</h1>
                    <div className="text-sm lg:text-base font-medium leading-tight font-Metropolis flex flex-col gap-4">
                        <a href="https://wa.me/6282332648369" target="blank">Contact 1: +62 823-3264-8369</a>
                        <a href="https://wa.me/6283119411817" target="blank">Contact 2: +62 831-1941-1817</a>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold text-2xl leading-7 mb-4">Social Media</h1>
                    <div className="flex gap-3">
                        <a href="https://www.instagram.com/code.ub/" target="blank" className="border rounded-full bg-secondary-10 border-secondary-10 p-1"><FaInstagram size={24} /></a>
                        <a href="" className="border rounded-full bg-secondary-10 border-secondary-10 p-1"><IoLogoTiktok size={24} /></a>
                        <a href="" className="border rounded-full bg-secondary-10 border-secondary-10 p-1"><FaYoutube size={24} /></a>
                    </div>
                </div>
            </div>
            <div>
                <hr className="mb-4" />
                <a
                    href="https://bit.ly/m/PIT-CODE-2024"
                    className="flex justify-center text-center font-Metropolis lg:text-base lg:leading-tight leading-normal text-xs"
                    target="_blank">
                    © Mufida, Cut Risfa, Natha, Alya, Jason. All Right Reserved.
                </a>
            </div>
        </footer>
    );
}
