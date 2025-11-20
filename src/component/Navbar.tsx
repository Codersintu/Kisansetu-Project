import User from "../assets/user.png"
import ShoppingCart from "../assets/trolley.png"
import logo from "../assets/logo.png"
export default function Navbar() {
  return (
    <div className="max-w-full max-h-[70px] bg-white shadow-sm py-3 px-6 flex items-center justify-between">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img 
          src={logo} 
          alt="KisanSetu" 
          className="w-36 h-auto"
        />
      </div>

      {/* Center Menu */}
      <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-green-600">Home</li>
        <li className="cursor-pointer hover:text-green-600">Services</li>
        <li className="cursor-pointer hover:text-green-600">Products</li>
        <li className="cursor-pointer hover:text-green-600">About us</li>
        <li className="cursor-pointer hover:text-green-600">Contact us</li>
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        <img src={User} className="cursor-pointer w-8 hover:text-green-600" />
        <img src={ShoppingCart} className="cursor-pointer w-8 hover:text-green-600" />

        {/* Buttons */}
        <button className="bg-green-500 cursor-pointer text-white px-4 py-1.5 rounded-full hover:bg-green-600 transition">
          Sign up
        </button>

        <button className="bg-gray-200 cursor-pointer text-gray-800 px-4 py-1.5 rounded-full hover:bg-gray-300 transition">
          Login
        </button>
      </div>

    </div>
  );
}
