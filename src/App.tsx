import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Product from './pages/Product'
import SelectedProduct from './component/SelectedProduct'
import { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { IsLoggedIn } from './atom'

function App() {
  const setisLoggedIn=useSetRecoilState<boolean>(IsLoggedIn)
  const isLoggedIn=useRecoilValue(IsLoggedIn)
  const navigate=useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setisLoggedIn(true);
      navigate("/")
    }
  }, [isLoggedIn]);


  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/category' element={<SelectedProduct/>}/>
      <Route path='/product' element={<Product/>}/>
      </Routes>

    </>
  )
}

export default App
