import { useEffect, useState } from "react";
import people from "../data";

export default interface TeamProps {
  id: number;
  image: string;
  name: string;
  title: string;
  quote: string;
}

export default function TeamMember() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      setIndex((prev) =>
        prev === people.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearTimeout(timer);
  }, [index, isPaused]);

  return (
    <section className="flex justify-center items-center py-20 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900">

      {/* OUTER WRAPPER */}
      <div
        className="w-[320px] overflow-hidden rounded-2xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* SLIDER TRACK */}
        <div
          style={{ transform: `translateX(-${index * 100}%)` }}
          className="flex transition-transform duration-500 ease-in-out"
        >
          {people.map((p) => (
            
            /* CARD */
            <div
              key={p.id}
              className="w-[320px] shrink-0 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl px-6 py-6 relative border border-white/20"
            >
              {/* Gradient Blobs */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply blur-xl opacity-60"></div>
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply blur-xl opacity-60"></div>

              {/* Profile Photo */}
              <div className="flex justify-center mt-2 mb-4 relative z-10">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-md group-hover:blur-lg transition-all duration-500"></div>

                  <img
                    src={p.image}
                    className="w-44 h-44 object-cover rounded-full border-4 border-white/80 shadow-xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                    alt={p.name}
                  />
                </div>
              </div>

              {/* NAME + TITLE */}
              <h2 className="text-center text-2xl font-bold text-white">
                {p.name}
              </h2>
              <p className="text-center text-purple-200 text-sm mb-4">
                {p.title}
              </p>

              {/* QUOTE */}
              <p className="text-center text-white/80 italic text-sm px-2">
                "{p.quote}"
              </p>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
}
