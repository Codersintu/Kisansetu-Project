import AboutSection from "../component/AboutSection"
import BuySellSection from "../component/BuySellsection"
import HomePageComponenet from "../component/HomePageComponenet"
import ProductList from "../component/ProductList"

function Home() {
  return (
    <div>
      <HomePageComponenet/>
           <ProductList/>
           <BuySellSection/>
           <AboutSection/>

    </div>
  )
}

export default Home