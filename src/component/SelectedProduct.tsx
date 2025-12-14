import veg1 from "../assets/veg1.png";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CartItem, ProductItem, type ProductItemProps } from "../atom";
import { useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function SelectedProduct() {
  const productsItem=useRecoilValue(ProductItem)
  const setproductItem=useSetRecoilState(ProductItem)
  const setCart=useSetRecoilState<Record<number, number>>(CartItem)
  const cart=useRecoilValue<Record<number, number>>(CartItem)


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

  useEffect(()=>{
    (async()=>{
      const response=await axios.get(`${BACKEND_URL}/api/post/all`)
      const data=response.data.products || [];
      const sortedData=data.sort((a:ProductItemProps,b:ProductItemProps)=>new Date(b.createdAt).getTime()-new Date(a.createdAt).getTime())
      setproductItem(sortedData)
      localStorage.setItem("productscached",JSON.stringify(sortedData))
    })()
  },[productsItem.length,setproductItem])


  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl shadow-2xl px-10 py-5 rounded-2xl">
        <h1 className="text-2xl bg-green-400 w-full font-medium text-start px-4 py-2">
          Buy Vegetable Online
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
          {productsItem.map((item) => (
            <div
              key={item.id}
              className="w-64 min-h-80 shadow-2xs p-5 border border-green-500 rounded-2xl flex flex-col gap-5"
            >
              <div className="flex-1 flex items-center justify-center">
                <img src={veg1} alt="img" className="object-contain hover:scale-110 transition duration-300" />
              </div>

              <div>
                <p className="text-xs">⌚ 16 MINS</p>
                <h1 className="font-medium">{item.title}</h1>

              </div>

              <div className="flex justify-between items-center">
                <p>💰{item.price}{item.unit}</p>

                {isInCart(item.id) ? (
                  <div className="flex items-center border bg-green-700 px-5 py-2 gap-2 text-white rounded-2xl">
                    <button className="cursor-pointer" onClick={() => decrement(item.id)}>-</button>
                    <p>{getQty(item.id)}</p>
                    <button className="cursor-pointer" onClick={() => increment(item.id)}>+</button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart(item.id)}
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