import BuySellSection from "../component/BuySellsection"
import HomePageComponenet from "../component/HomePageComponenet"
import ProductList from "../component/ProductList"

function Home() {
  return (
    <div>
      <HomePageComponenet/>
           <ProductList/>
           <BuySellSection/>

    </div>
  )
}

export default Home