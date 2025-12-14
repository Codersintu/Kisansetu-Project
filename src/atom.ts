import axios from "axios";
import { atom, selector } from "recoil";
import { BACKEND_URL } from "./config";

export const CartItem=atom({
    key:"selectedProduct",
    default:{}
})

export const IsLoggedIn=atom({
    key:"isLoggedIn",
    default:false
})
export const IsSignUp=atom({
    key:"isSignUp",
    default:false
})

export const UserData=atom({
    key:"userData",
    default:{}
})
export interface ProductItemProps {
  id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
  unit: "kg" | "piece" | "dozen" | "litre";
  img?: string;      
  createdAt: string;  
}

export const ProductItem=atom<ProductItemProps[]>({
    key:"productItem",
    default:selector<ProductItemProps[]>({
        key:"productItemSelector",
       get:async ()=>{
        const cached=localStorage.getItem("productscached")
        if (cached) {
            const data=JSON.parse(cached)
            return data.sort((a:ProductItemProps,b:ProductItemProps)=>new Date(b.createdAt).getTime()-new Date(a.createdAt).getTime())
       }
       try {
        const response=await axios.get(`${BACKEND_URL}/api/post/all`)
        const data=response.data.products || [];
        const sortedData=data.sort((a:ProductItemProps,b:ProductItemProps)=>new Date(b.createdAt).getTime()-new Date(a.createdAt).getTime())
        localStorage.setItem("productscached",JSON.stringify(sortedData))
        return sortedData
       } catch (error) {
        console.log("Error fetching products:",error)
        return []
       }
    }
    })
})