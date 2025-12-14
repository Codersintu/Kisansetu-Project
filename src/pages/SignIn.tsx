import { useRef, useState } from "react";
import logo from "../assets/logo.png";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { IsLoggedIn } from "../atom";
function SignIn() {
  const setisLoggedIn=useSetRecoilState<boolean>(IsLoggedIn)
  const MobNumberRef=useRef<HTMLInputElement>(null)
  const passwordRef=useRef<HTMLInputElement>(null)
  const [Error,setError]=useState<string|null>(null);
  const [Loading,setLoading]=useState<boolean>(false);
  const [message,setMessage]=useState<string|null>(null);
  const navigate=useNavigate()
  const handleLogIn=async()=>{
    setLoading(true);
    const mobNumber=MobNumberRef.current?.value;
    const password=passwordRef.current?.value;
    if(!mobNumber || !password){
        setError("All fields are required");
        setLoading(false);
        return;
    }
    try {
      const response=await axios.post(`${BACKEND_URL}/api/auth/login`,{
        MobNumber:mobNumber,
        password:password
      }) ;
      localStorage.setItem("token",response.data.token);
      setMessage(response.data.message);
      setisLoggedIn(true);
      setError(null);
      navigate("/");
    } catch (error:any) {
      console.error("Login failed:",error);
      setMessage(null);
      setError(error.response?.data?.error || "Login failed");
    }finally{
      setLoading(false);
    }
  }
  return (
    <div className="min-h-[calc(100vh-70px)] flex items-center justify-center">
      <div className=" bg-white w-full max-w-xs h-auto p-4 shadow-lg border-3  rounded-2xl flex flex-col items-center gap-5">
        <h1 className="text-3xl font-semibold">Login with E-mail</h1>
        <div className="w-48"><img src={logo} alt="" /></div>
        <div className="flex flex-col gap-5 mt-6">
            <input type="text" ref={MobNumberRef} className="w-full px-5 py-1 border border-gray-500 rounded-2xl outline-none"  placeholder="☎️ MobNumber..."/>
            <input type="password" ref={passwordRef} className="w-full px-5 py-1 border border-gray-500 rounded-2xl outline-none" placeholder="🔑 Password" />
            <button onClick={handleLogIn} className="bg-green-600 py-2 rounded-2xl text-white  hover:bg-green-700 cursor-pointer">{Loading ? "Log In...":"Log In"}</button>
            {message && <p className="text-green-500 text-sm">{message}</p>}
            {Error && <p className="text-red-500 text-sm">{Error}</p>}
            <div className="flex items-center gap-2">
                <span className="w-1/2 border border-gray-300"></span>
                <p className="text-sm">or</p>
                 <span className="w-1/2 border border-gray-300"></span>
            </div>
            <a href="/signup" className="text-blue-500 hover:underline ">Create new account</a>
        </div>
      </div>
    </div>
  )
}

export default SignIn