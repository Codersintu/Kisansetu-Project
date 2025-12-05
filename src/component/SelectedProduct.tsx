import veg1 from "../assets/veg1.png"
import veg2 from "../assets/veg2.png"
import veg3 from "../assets/veg.png"
import potato from "../assets/potato.png"
import { useState } from "react";
const categories = [
    { id: 1, label: "Bringel with freshness",quantity:"1KG", image: veg1 },
    { id: 2, label: "Natural Potato",quantity:"1KG", image: veg2 },
    { id: 3, label: "raddis with white and clean",quantity:"1KG", image: veg3 },
    { id: 4, label: "green chilli fresh",quantity:"1KG", image: potato },
    { id: 5, label: "red Tomato with freshness",quantity:"1KG", image: veg1 },
    { id: 6, label: "Cucumber with freshness and green",quantity:"1KG", image: veg2 },
    { id: 7, label: "Garlic fresh in winter",quantity:"1KG", image: veg3 },
    { id: 8, label: "Potato from Uganada",quantity:"1KG", image: potato },
    { id: 9, label: "Bringel with freshness",quantity:"1KG", image: veg1 },
    { id: 10, label: "Natural Potato",quantity:"1KG", image: veg2 },
    { id: 11, label: "raddis with white and clean",quantity:"1KG", image: veg3 },
    { id: 12, label: "green chilli fresh",quantity:"1KG", image: potato },
    { id: 13, label: "red Tomato with freshness",quantity:"1KG", image: veg1 },
    { id: 14, label: "Cucumber with freshness and green",quantity:"1KG", image: veg2 },
    { id: 15, label: "Garlic fresh in winter",quantity:"1KG", image: veg3 },
    { id: 16, label: "Potato from Uganada",quantity:"1KG", image: potato },
    
];
function SelectedProduct() {
    const [add,setAdd]=useState(false)
    return (
        <div className="w-full flex justify-center">
            <div className="max-w-7xl shadow-2xl px-10 py-5 rounded-2xl">
                <h1 className="text-2xl bg-green-400 w-full font-medium text-start">Buy Vegetable Online</h1>
                <div className="grid md:grid-cols-4 grid-cols-1 gap-6 mt-5">
                    {categories.map((c) => (
                        <div key={c.id} className="w-3xs h-96 shadow-2xs p-5 border border-green-500 rounded-2xl flex flex-col gap-5">
                            <div className=""><img src={c.image} alt="" /></div>
                            <div className="">
                            <p className="text-xs">⌚ 16 MINS</p>
                            <h1>{c.label}</h1>
                            <p className="text-sm">{c.quantity}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p>💰 35</p>
                                {add===true ? <div className="flex items-center border bg-green-700 px-3 py-3 gap-2 text-white rounded-2xl">
                                    <p>-</p>
                                    <p>1</p>
                                    <p>+</p>
                                </div> :
                                <button onClick={()=>setAdd(true)} className="border border-green-600 bg-green-100 text-green-500 cursor-pointer  px-5 py-2 rounded-xl">ADD</button>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default SelectedProduct