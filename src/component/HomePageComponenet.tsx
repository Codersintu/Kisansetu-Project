import Navbar from "./Navbar"
import logo from "../assets/logo.png"
import veg1 from "../assets/veg1.png"
import veg2 from "../assets/veg2.png"
import veg3 from "../assets/veg.png"

function HomePageComponenet() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="flex-1 h-[calc(100vh-70px)] bg-green-100 md:rounded-[99%_10%_100%_0%/0%_0%_100%_100%] overflow-hidden ">

        {/* LEFT CONTENT */}
        <div className="z-10 flex flex-col items-center justify-center px-10 md:pl-30 md:pt-10 max-w-3xl gap-4">

          <img src={logo} alt="KisanSetu Logo" className="md:w-[500px] w-[260px]" />

          <button className="bg-green-600 text-white md:px-5 px-4 py-2 rounded-lg cursor-pointer hover:bg-green-700">Learn more</button>

          <div className="">
            <h1 className="md:text-4xl text-2xl font-bold text-black">
              Freshness you can trust.
            </h1>

            <p className="text-gray-700 text-xs md:mt-3 mt-1 max-w-xl">
              Our mission is to provide customers with the freshest products in Patna.
              24/7 customer service make it a pleasure to shop with us
            </p>
          </div>
        </div>


        <div className="pointer-events-none absolute inset-0 flex justify-end items-center pr-10 z-0">
          <div className="relative w-[260px] h-[520px]">

            <div className="absolute top-68 md:top-56 right-0 md:w-36 w-32 h-32 md:h-36 rounded-full shadow-lg overflow-hidden border border-white">
              <img src={veg1} className="w-full h-full object-cover" />
            </div>

    
            <div className="absolute md:top-[550px] top-[470px] md:right-[500px] right-0 bottom-0 -translate-y-1/2 md:w-36 md:h-36 w-32 h-32 rounded-full shadow-lg overflow-hidden border border-white">
              <img src={veg2} className="w-full h-full object-cover" />
            </div>

        
            <div className="absolute bottom-20 md:bottom-0 md:right-64 md:w-36 md:h-36 w-32 h-32 rounded-full shadow-lg overflow-hidden border border-white">
              <img src={veg3} className="w-full h-full object-cover" />
            </div>

          </div>
      
        </div>
         <div className="absolute md:hidden bottom-0 w-full flex justify-around mb-3">
          <button className="px-10 border-2 font-bold rounded-2xl cursor-pointer">SignUp</button>
          <button className="px-10 border-2 font-bold rounded-2xl cursor-pointer">Log In</button>
         </div>
      </div>

    </div>
  )
}

export default HomePageComponenet