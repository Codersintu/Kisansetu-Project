import veg1 from "../assets/veg1.png"
import veg2 from "../assets/veg2.png"
import veg3 from "../assets/veg.png"
import potato from "../assets/potato.png"

const categories = [
    {id:1, label: "Vegetables", image: veg1 },
    {id:2, label: "Fruits", image: veg2 },
    {id:3, label: "Dairy", image: veg3 },
    {id:4, label: "Grains", image: potato },
    {id:1, label: "Vegetables", image: veg1 },
    {id:2, label: "Fruits", image: veg2 },
    {id:3, label: "Dairy", image: veg3 },
    {id:4, label: "Grains", image: potato }
];

export default function CategoryGrid() {
  return (
    <div className="w-full flex justify-center py-12 z-0">
      {/* Outer box (white card on top of bg pattern) */}
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {categories.map((c,id) => (
            <div
              key={id}
              className="w-64 h-64 rounded-2xl border border-gray-300 bg-[#f9f9f9] flex flex-col overflow-hidden"
            >
              {/* Top empty area – later you can put icon / image */}
              <img src={c.image} className="flex-1 bg-white" />

              {/* Bottom label bar */}
              <div className="bg-gray-200 text-center py-2">
                <span className="text-sm font-medium text-gray-700">
                  {c.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
