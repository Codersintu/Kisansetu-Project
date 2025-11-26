import logo from "../assets/logo.png";
import aboutWaves from "../assets/g.png";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-white overflow-hidden z-0">
      {/* TOP WAVES BACKGROUND */}
      <div
        className="absolute -top-10 left-0 w-full h-64 bg-no-repeat bg-cover bg-center z-0 pointer-events-none"
        style={{ backgroundImage: `url(${aboutWaves})` }}
      />

    
      <div className="relative max-w-4xl mx-auto px-6 pt-48 pb-24 text-center z-10">
    
        <p className="text-xs tracking-[0.35em] text-green-600 mb-2">
          A BIT
        </p>

        
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[0.15em] mb-6">
          ABOUT US
        </h2>

    
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-8">
          From they fine john he give of rich he. They age and draw mrs like.
          Improving end distrusts may instantly was household applauded
          incommode. Why kept very ever home mrs. Considered sympathize ten
          uncommonly occasional assistance sufficient not.
        </p>

        
        <button className="mt-2 cursor-pointer inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-2 text-sm font-medium text-white shadow-lg shadow-green-600/30 hover:bg-green-700 transition">
          EXPLORE MORE
        </button>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 pb-16">
        
        <div className="h-px bg-gray-300 mb-10" />

        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-white shadow-[0_12px_35px_rgba(0,0,0,0.15)] px-10 py-4">
            <img src={logo} alt="KISAANSETU" className="w-40 md:w-48" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-800 gap-4">
          <p className="text-center md:text-left font-semibold">
            Kankarbhag, Hanuman Nagar<br />
            Patrakar nagar thana, 800020
          </p>

          <p className="text-center font-semibold md:text-right">
            +91 9090090090909<br />
            @kisaansetu@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
