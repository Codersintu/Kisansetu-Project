import{ useState } from "react";
import veg1 from "../assets/veg1.png";
import veg2 from "../assets/veg2.png";
import veg3 from "../assets/veg.png";
import potato from "../assets/potato.png";


interface Category {
  id: number;
  label: string;
  quantity: string;
  image: string;
}

const categories: Category[] = [
  { id: 1, label: "Brinjal with freshness", quantity: "1KG", image: veg1 },
  { id: 2, label: "Natural Potato", quantity: "1KG", image: veg2 },
  { id: 3, label: "Radish, white and clean", quantity: "1KG", image: veg3 },
  { id: 4, label: "Green chilli fresh", quantity: "1KG", image: potato },
  { id: 5, label: "Red Tomato with freshness", quantity: "1KG", image: veg1 },
  { id: 6, label: "Cucumber, fresh and green", quantity: "1KG", image: veg2 },
  { id: 7, label: "Garlic (fresh in winter)", quantity: "1KG", image: veg3 },
  { id: 8, label: "Potato from Uganda", quantity: "1KG", image: potato },
  { id: 9, label: "Brinjal with freshness", quantity: "1KG", image: veg1 },
  { id: 10, label: "Natural Potato", quantity: "500gm", image: veg2 },
  { id: 11, label: "Radish, white and clean", quantity: "1KG", image: veg3 },
  { id: 12, label: "Green chilli fresh", quantity: "1KG", image: potato },
  { id: 13, label: "Red Tomato with freshness", quantity: "1KG", image: veg1 },
  { id: 14, label: "Cucumber, fresh and green", quantity: "1KG", image: veg2 },
  { id: 15, label: "Garlic (fresh in winter)", quantity: "10KG", image: veg3 },
  { id: 16, label: "Potato from Uganda", quantity: "200gm", image: potato },
];

export default function SelectedProduct() {
  const [cart, setCart] = useState<Record<number, number>>({});

  const isInCart=(id:number)=>typeof cart[id]==="number" && cart[id]>0
  const getQty=(id:number)=>cart[id]??0
  function addToCart(id:number){
    setCart((prev)=>({...prev,[id]:1}))
  }

  function increment(id:number){
    setCart((prev)=>({...prev,[id]:(prev[id]??0)+1}))
  }

  function decrement(id:number){
    setCart((prev)=>{
    const current=prev[id]??0
    if (current<=1) {
      const copy={...prev}
      delete copy[id]
      return copy
    }

    return ({...prev,[id]:current-1})
  })
  }


  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl shadow-2xl px-10 py-5 rounded-2xl">
        <h1 className="text-2xl bg-green-400 w-full font-medium text-start px-4 py-2">
          Buy Vegetable Online
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
          {categories.map((c) => (
            <div
              key={c.id}
              className="w-64 min-h-80 shadow-2xs p-5 border border-green-500 rounded-2xl flex flex-col gap-5"
            >
              <div className="flex-1 flex items-center justify-center">
                <img src={c.image} alt={c.label} className="object-contain hover:scale-110 transition duration-300" />
              </div>

              <div>
                <p className="text-xs">⌚ 16 MINS</p>
                <h1 className="font-medium">{c.label}</h1>
                <p className="text-sm">{c.quantity}</p>
              </div>

              <div className="flex justify-between items-center">
                <p>💰 35</p>

                {/*
                  If product is in cart, show quantity controls for *that product*.
                  Otherwise show ADD button.
                */}
                {isInCart(c.id) ? (
                  <div className="flex items-center border bg-green-700 px-5 py-2 gap-2 text-white rounded-2xl">
                    <button className="cursor-pointer" onClick={() => decrement(c.id)}>-</button>
                    <p>{getQty(c.id)}</p>
                    <button className="cursor-pointer" onClick={() => increment(c.id)}>+</button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart(c.id)}
                    className="border border-green-600 bg-green-100 text-green-500 cursor-pointer px-5 py-2 rounded-xl"
                  >
                    ADD
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}