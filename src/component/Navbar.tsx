import person from "../assets/user.png"
import ShoppingCart from "../assets/trolley.png"
import logo from "../assets/logo.png"
import menu from "../assets/menu.png"
import cancel from "../assets/cancel.png"
import { useState } from "react";
import { motion } from "motion/react"
import { Link, useLocation } from "react-router-dom"
import GeoLocation from "./GeoLocation";
import Cart from "./Cart"

interface navbarprops{
  user:boolean
}
export default function Navbar({user}:navbarprops) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
  const [locationCard,setlocationCard]=useState(false)
  const {Location,Error,refresh}=GeoLocation()
  const location = useLocation();
  const isProductPage = location.pathname === "/category";

  if(Error){
    return 
  }

  
  return (
    <>
      <div className="max-w-full max-h-[70px] bg-white shadow-sm py-3 md:px-6 px-2 md:flex md:items-center md:justify-between flex justify-between sticky top-0 z-50">

        {/* Logo */}
        <Link to="/">
          <div className="flex items-center">
            <img
              src={logo}
              alt="KisanSetu"
              className="md:w-36 w-32 h-auto"
            />
          </div>
        </Link>

        {/* Center Menu */}
        {!isProductPage && (
          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <a href="#home" className="cursor-pointer hover:text-green-600">Home</a>
            <a href="#service" className="cursor-pointer hover:text-green-600">Services</a>

            <a href="#product" className="cursor-pointer hover:text-green-600">Products</a>

            <a href="#about" className="cursor-pointer hover:text-green-600">About us</a>

            <a href="#about" className="cursor-pointer hover:text-green-600">Contact us</a>
          </ul>
        )}
        {isProductPage && (
          <div className="items-center gap-3 w-1/2 hidden md:flex">

            {/* LOCATION */}
            <div onClick={()=>setlocationCard(true)} className="flex items-center w-24 cursor-pointer">
              <p className="font-semibold text-gray-800">Select Location</p>
              {Error && <p>{Error}</p>}
              {Location && <p>{Location.latitude}and{Location.longitude}</p>}
              <span className="text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
              </span>
            </div>

            {/* SEARCH */}
            <div className="relative w-full max-w-3xl">
              <div className="flex items-center bg-white rounded-xl border px-4 py-2">
                <span className="text-gray-500 mr-2">🔍</span>
                <input
                  type="text"
                  placeholder={`Search for products...`}
                  className={`w-full outline-none transition-opacity duration-300`}
                />
              </div>
            </div>

          </div>
        )}



        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-4">

          <img onClick={()=>setIsCartOpen(true)} src={ShoppingCart} className="cursor-pointer  w-8 hover:text-green-600" />

          {/* Buttons */}
          {user===true ?
          <img className="w-8 h-8" src={person} alt="" />:
          <>
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
          </>
      }
        </div>

        <div className="md:hidden w-10" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <img src={cancel} alt="" /> : <img src={menu} alt="" />}</div>
      </div>

      {isMenuOpen &&
        <motion.div initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -200, opacity: 0 }} transition={{ duration: 0.3 }} className={`fixed top-17 left-0 h-screen w-48 flex flex-col gap-6 px-2 pt-6 md:hidden list-none bg-gray-100 z-50 `}>

          <a href="#home" className="cursor-pointer  hover:text-green-600 text-xl font-semibold border-b border-gray-400 ">Home</a>
          <a href="#service" className="cursor-pointer  hover:text-green-600 text-xl font-semibold border-b border-gray-400 ">Services</a>

          <a href="#product" className="cursor-pointer  hover:text-green-600 text-xl font-semibold border-b border-gray-400 ">Products</a>

          <a href="#about" className="cursor-pointer  hover:text-green-600 text-xl font-semibold border-b border-gray-400 ">About us</a>
          <a href="#about" className="cursor-pointer  hover:text-green-600 text-xl font-semibold border-b border-gray-400 ">Contact us</a>
        </motion.div>
      }

      {/* location card UI */}
      {locationCard && 
      <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50">
        <div className="w-96 bg-white h-96 shadow-xl rounded-2xl border border-gray-200 animate-fadeIn">
          <div className="flex flex-col gap-8 px-8 py-5">
            <div className="flex items-center justify-between">
              <h1 className="text-xl">Your Location</h1>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" onClick={()=>setlocationCard(false)} className="size-6 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <div className="relative w-full">
              <div className="flex items-center bg-gray-50 border border-gray-500 px-2 py-2 rounded-2xl">
                <span>🔍</span>
                <input className="outline-none" type="text" placeholder="search New Address..." />
              </div>
            </div>
            {/* USE MY CURRENT LOCATION CARD */}
            <div className="flex items-center justify-between bg-red-50 border border-red-200 px-4 py-3 rounded-xl shadow-sm cursor-pointer hover:bg-red-100 transition">

              {/* LEFT SIDE */}
              <div className="flex items-start gap-3">
                <div className="text-red-500 text-xl">
                  📍
                </div>

                <div>
                  <p className="text-red-600 font-semibold">Use My Current Location</p>
                  <p className="text-gray-600 text-sm leading-tight">
                    Enable your current location for better services
                  </p>
                </div>
              </div>

              {/* ENABLE BUTTON */}
              <button onClick={refresh} className="px-4 py-1.5 text-red-600 border border-red-300 rounded-full cursor-pointer hover:bg-red-100 font-medium">
                Enable
              </button>

            </div>

          </div>
        </div>
      </div>
}
{isCartOpen &&
   <Cart setIsCartOpen={setIsCartOpen}/>}
    </>
  );
}
