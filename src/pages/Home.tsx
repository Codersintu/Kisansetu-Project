import AboutSection from "../component/AboutSection"
import BuySellSection from "../component/BuySellsection"
import HomePageComponenet from "../component/HomePageComponenet"
import ProductList from "../component/ProductList"
import TeamMember from "../component/TeamMember"

function Home() {
  return (
    <div className="">
      <HomePageComponenet/>
           <ProductList/>
           <BuySellSection/>
           <TeamMember/>
           <AboutSection/>
    </div>
  )
}

export default Home