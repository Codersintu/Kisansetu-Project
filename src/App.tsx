import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Product from './pages/Product'
import SelectedProduct from './component/SelectedProduct'

function App() {
 const user=true

  return (
    <>
    <Navbar user={user}/>
    
    <Routes>
      {user===true &&
      <Route path='/' element={<Home/>}/>}
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/category' element={<SelectedProduct/>}/>
      <Route path='/product' element={<Product/>}/>
      </Routes>

    </>
  )
}

export default App
