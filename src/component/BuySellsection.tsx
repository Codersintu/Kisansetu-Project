// src/components/BuySellSection.tsx
import logo from "../assets/logo.png";

export default function BuySellSection() {
  return (
    <section className="relative w-full bg-white py-16 overflow-hidden">

      {/* BIG CURVED SHAPE ON RIGHT BOTTOM */}
    <div className="pointer-events-none absolute left-0 top-0  w-[600px] h-[400px] bg-[#D8F1D7] rounded-r-full" />
      <div className="pointer-events-none absolute right-[-260px] bottom-[-260px] w-[900px] h-[600px] bg-[#D8F1D7] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">

        {/* TOP: OUR PRODUCTS */}
        <div className="flex justify-end">
          <div className="max-w-xl  flex flex-col items-center md:text-left">
            <h2 className="text-3xl md:text-6xl font-semibold tracking-[0.15em]">
              OUR PRODUCTS
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
              Discover the freshness of Patna&apos;s farms delivered directly to your
              doorstep. Our marketplace connects you with local farmers, offering a wide
              range of sustainably grown fruits, vegetables, and other grocery essentials.
              By shopping with us, you enjoy high-quality produce while supporting the
              hardworking agricultural community of Patna.
            </p>

            <button className="mt-5 cursor-pointer inline-flex items-center justify-center rounded-full border border-green-600 bg-white px-14 py-4 text-sm font-medium text-green-700 hover:bg-green-600 hover:text-white transition">
              Buy
            </button>
          </div>
        </div>

        {/* CENTER LOGO */}
        <div className="flex justify-center my-10">
          <img src={logo} alt="KisanSetu" className="w-52 md:w-64" />
        </div>

        {/* BOTTOM: SELL YOUR PRODUCTS */}
        <div className="flex justify-start mt-4">
          <div className="max-w-xl flex flex-col items-center ">
            <h2 className="text-3xl  md:text-5xl font-semibold">
              SELL YOUR PRODUCTS
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
              We welcome all farmers across Patna to join our growing network and bring
              their fresh, locally grown products to customers across the city. Our
              platform offers easy and transparent ways to sell fruits, vegetables,
              grains, dairy, and other farm produce directly to consumers who value
              quality and trust local sources. Partner with us to help farmers get fair
              prices, foster sustainable agriculture, and build a community that supports
              responsible farming.
            </p>

            <button className="mt-5 inline-flex items-center justify-center rounded-full border border-green-600 bg-white px-14 py-4 cursor-pointer text-sm font-medium text-green-700 hover:bg-green-600 hover:text-white transition">
              Sell
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
