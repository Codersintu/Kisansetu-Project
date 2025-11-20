import Navbar from "./Navbar"
import logo from "../assets/logo.png"
import veg1 from "../assets/veg1.png"
import veg2 from "../assets/veg2.png"
import veg3 from "../assets/veg.png"

function HomePageComponenet() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="flex-1 h-[calc(100vh-70px)] bg-green-100 rounded-[99%_10%_100%_0%/0%_0%_100%_100%] overflow-hidden">

        {/* LEFT CONTENT */}
        <div className="z-10 flex flex-col items-center justify-center pl-30 pt-10 max-w-3xl gap-4">

          <img src={logo} alt="KisanSetu Logo" className="w-[400px]" />

          <button className="bg-green-600 text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-green-700">Learn more</button>

          <div className="">
            <h1 className="text-4xl font-bold text-black">
              Freshness you can trust.
            </h1>

            <p className="text-gray-700 mt-3 max-w-xl">
              Our mission is to provide customers with the freshest products in Patna.
              24/7 customer service make it a pleasure to shop with us
            </p>
          </div>
        </div>

        {/* RIGHT VEGETABLE IMAGES */}
        {/* RIGHT VEGETABLE IMAGES */}
        <div className="pointer-events-none absolute inset-0 flex justify-end items-center pr-10 z-20 ">
          <div className="relative w-[260px] h-[520px]">

            {/* Top image – thoda upar, bilkul right */}
            <div className="absolute top-56 right-0 w-32 h-32 rounded-full shadow-lg overflow-hidden border border-white">
              <img src={veg1} className="w-full h-full object-cover" />
            </div>

            {/* Middle image – center ke around, thoda left */}
            <div className="absolute top-[550px] right-[500px] -translate-y-1/2 w-36 h-36 rounded-full shadow-lg overflow-hidden border border-white">
              <img src={veg2} className="w-full h-full object-cover" />
            </div>

            {/* Bottom image – neeche, aur zyada left → curve follow karega */}
            <div className="absolute bottom-0 right-64 w-32 h-32 rounded-full shadow-lg overflow-hidden border border-white">
              <img src={veg3} className="w-full h-full object-cover" />
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default HomePageComponenet