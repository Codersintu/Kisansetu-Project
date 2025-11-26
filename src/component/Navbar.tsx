import User from "../assets/user.png"
import ShoppingCart from "../assets/trolley.png"
import logo from "../assets/logo.png"
import menu from "../assets/menu.png"
import cancel from "../assets/cancel.png"
import { useState } from "react";
import {motion} from "motion/react"
import { Link } from "react-router-dom"
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
    <div className="max-w-full max-h-[70px] bg-white shadow-sm py-3 md:px-6 px-2 md:flex md:items-center md:justify-between flex justify-between sticky top-0 z-50">
      
      {/* Logo */}
      <div className="flex items-center">
        <img 
          src={logo} 
          alt="KisanSetu" 
          className="md:w-36 w-32 h-auto"
        />
      </div>

      {/* Center Menu */}
      <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <a href="#home" className="cursor-pointer hover:text-green-600">Home</a>
        <a href="#service" className="cursor-pointer hover:text-green-600">Services</a>
      
        <a href="#product" className="cursor-pointer hover:text-green-600">Products</a>

        <a href="#about" className="cursor-pointer hover:text-green-600">About us</a>
    
        <a href="#about" className="cursor-pointer hover:text-green-600">Contact us</a>
      </ul>

      {/* Right Icons */}
      <div className="hidden md:flex items-center gap-4">
        <img src={User} className="cursor-pointer w-8 hover:text-green-600" />
        <img src={ShoppingCart} className="cursor-pointer  w-8 hover:text-green-600" />

        {/* Buttons */}
        <Link to="/signup">
        <button className="bg-green-500 cursor-pointer text-white px-4 py-1.5 rounded-full hover:bg-green-600 transition">
          Sign up
        </button>
        </Link>
        
        <Link to="/signin">
        <button className="bg-gray-200 cursor-pointer text-gray-800 px-4 py-1.5 rounded-full hover:bg-gray-300 transition">
          Login
        </button>
        </Link>

      </div>

        <div className="md:hidden w-10" onClick={()=>setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <img src={cancel} alt="" /> : <img src={menu} alt=""/>}</div>
    </div>

    {isMenuOpen &&
     <motion.div initial={{x:-200,opacity:0}} animate={{x:0,opacity:1}} exit={{x:-200,opacity:0}} transition={{duration:0.3}} className={`fixed top-17 left-0 h-screen w-48 flex flex-col gap-6 px-2 pt-6 md:hidden list-none bg-gray-100 z-50 `}>
        
        <a href="#home" className="cursor-pointer  hover:text-green-600 text-xl font-semibold border-b border-gray-400 ">Home</a>
        <a href="#service" className="cursor-pointer  hover:text-green-600 text-xl font-semibold border-b border-gray-400 ">Services</a>
      
        <a href="#product" className="cursor-pointer  hover:text-green-600 text-xl font-semibold border-b border-gray-400 ">Products</a>
  
        <a href="#about" className="cursor-pointer  hover:text-green-600 text-xl font-semibold border-b border-gray-400 ">About us</a>
        <a href="#about" className="cursor-pointer  hover:text-green-600 text-xl font-semibold border-b border-gray-400 ">Contact us</a>
      </motion.div>
}

    </>
  );
}
