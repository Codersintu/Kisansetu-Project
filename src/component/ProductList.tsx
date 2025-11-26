import bg from "../assets/g.png"
import CategoryGrid from "./CategoryGrid"
export default function ProductList() {
  return (
    <div id="product" style={{backgroundImage:`url(${bg})`}} className="w-full h-full bg-cyan-500">
     <CategoryGrid/>
    </div>
  )
}