import person from "../assets/user.png";
import ShoppingCart from "../assets/trolley.png";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import cancel from "../assets/cancel.png";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import GeoLocation from "./GeoLocation";
import Cart from "./Cart";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { IsLoggedIn } from "../atom";

export default function Navbar() {
  const setIsLoggedIn = useSetRecoilState(IsLoggedIn);
  const isLoggedIn = useRecoilValue(IsLoggedIn);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [locationCard, setLocationCard] = useState(false);

  const { Location, Error, refresh } = GeoLocation();
  const location = useLocation();
  const isProductPage = location.pathname === "/category";

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3 md:px-6">

          {/* LOGO */}
          <Link to="/">
            <img src={logo} alt="KisanSetu" className="w-32 md:w-36" />
          </Link>

          {/* CENTER MENU (DESKTOP) */}
          {!isProductPage && (
            <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
              <a href="#home" className="hover:text-green-600">Home</a>
              <a href="#service" className="hover:text-green-600">Services</a>
              <a href="#product" className="hover:text-green-600">Products</a>
              <a href="#about" className="hover:text-green-600">About</a>
              <a href="#contact" className="hover:text-green-600">Contact</a>
            </ul>
          )}

          {/* SEARCH + LOCATION (PRODUCT PAGE) */}
          {isProductPage && (
            <div className="hidden md:flex items-center gap-4 w-1/2">
              <div
                onClick={() => setLocationCard(true)}
                className="flex items-center gap-1 cursor-pointer"
              >
                <p className="font-semibold text-gray-800">Select Location</p>
                <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                  <path stroke="currentColor" strokeWidth="1.5" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>

              <div className="flex w-full items-center border rounded-xl px-4 py-2">
                <span className="mr-2">🔍</span>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full outline-none"
                />
              </div>
              
            </div>
          )}

          {/* RIGHT ACTIONS (DESKTOP) */}
          <div className="hidden md:flex items-center gap-8">
            {isLoggedIn ? (
              <>
                <img
                  src={ShoppingCart}
                  className="w-8 cursor-pointer"
                  onClick={() => setIsCartOpen(true)}
                />
                <img src={person} className="w-8 h-8" />
                <button
                  onClick={handleLogout}
                  className="border px-3 py-1 rounded-xl"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signup">
                  <button className="bg-green-500 text-white px-4 py-1.5 rounded-full">
                    Sign up
                  </button>
                </Link>
                <Link to="/signin">
                  <button className="bg-gray-200 px-4 py-1.5 rounded-full">
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center gap-6" >
            <img
                  src={ShoppingCart}
                  className="w-9 cursor-pointer"
                  onClick={() => setIsCartOpen(true)}
                />
            <img onClick={() => setIsMenuOpen(!isMenuOpen)} src={isMenuOpen ? cancel : menu} className="w-7" />
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          exit={{ x: -200 }}
          transition={{ duration: 0.3 }}
          className="fixed top-16 left-0 h-screen w-64 bg-white shadow-lg z-50 md:hidden flex flex-col gap-6 px-6 pt-6"
        >
          <a className="text-lg font-semibold border-b">Home</a>
          <a className="text-lg font-semibold border-b">Services</a>
          <a className="text-lg font-semibold border-b">Products</a>
          <a className="text-lg font-semibold border-b">About</a>
          <a className="text-lg font-semibold border-b">Contact</a>
          {isLoggedIn && (
            <>
              <button onClick={handleLogout} className="text-lg font-semibold border-b text-left">
                Logout
              </button>
            </>
          )}
        </motion.div>
        
      )}

      {/* LOCATION MODAL */}
      {locationCard && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white w-96 h-96 rounded-2xl shadow-xl p-6">
            <div className="flex justify-between mb-6">
              <h2 className="text-xl font-semibold">Your Location</h2>
              <button onClick={() => setLocationCard(false)}>✖</button>
            </div>

            <button
              onClick={refresh}
              className="w-full border rounded-xl py-3 text-red-600"
            >
              Use My Current Location
            </button>

            {Error && <p className="text-red-500 mt-4">{Error}</p>}
            {Location && (
              <p className="mt-4 text-sm text-gray-600">
                Lat: {Location.latitude}, Lng: {Location.longitude}
              </p>
            )}
          </div>
        </div>
      )}

      {/* CART */}
      {isCartOpen && <Cart setIsCartOpen={setIsCartOpen} />}
    </>
  );
}
