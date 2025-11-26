import { useEffect, useState } from "react";
import people from "../data";

export default interface TeamProps{
    id:number;
    image:string;
    name:string;
    title:string;
    quote:string;
}

export default function TeamMember() {
    const [index,setIndex]=useState(0)
    const [isPaused,setIspaused]=useState(false)
    useEffect(()=>{
        if (isPaused) return;

        const interval=setTimeout(() => {
            setIndex((previndex)=> previndex===people.length-1 ? 0 : previndex+1)
        }, 3000);
        return ()=>clearTimeout(interval)
    })
  return (
    <div className="w-full max-w-[400px] mx-auto overflow-hidden shadow-2xs rounded-2xl px-2 my-8 bg-gray-50" onMouseEnter={()=>setIspaused(true)} onMouseLeave={()=>setIspaused(false)}>
        <div style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} className="flex items-center transition ease-in-out duration-300">
            {people.map((p,ix)=>(
                <div key={ix} className="w-full flex flex-col items-center shrink-0">
                    <img className="w-56 h-56 rounded-full object-cover" src={p.image} alt="" />
                    <div className="mt-4 text-center space-y-1">
                        <h3 className="text-xl font-medium text-gray-900">{p.name}</h3>
                        <p className="text-sm text-gray-600">{p.title}</p>
                        <div className="italic ">{p.quote}</div>

                    </div>
                </div>
            ))}

        </div>

    </div>
  )
}
