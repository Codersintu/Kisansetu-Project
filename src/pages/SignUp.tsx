import { useRef, useState } from "react";
import logo from "../assets/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { IsSignUp } from "../atom";
import { BACKEND_URL } from "../config";
function SignUp() {
  const setIsSignup=useSetRecoilState<boolean>(IsSignUp)
  const MobNumberRef=useRef<HTMLInputElement>(null);
  const emailRef=useRef<HTMLInputElement>(null);
  const passwordRef=useRef<HTMLInputElement>(null);
  const [Error,setError]=useState<string|null>(null);
  const [Loading,setLoading]=useState<boolean>(false);
  const [message,setMessage]=useState<string|null>(null);
  const navigate=useNavigate()
  const handleSignup=async()=>{
    setLoading(true);
    const mobNumber=MobNumberRef.current?.value;
    const email=emailRef.current?.value;
    const password=passwordRef.current?.value;

    if(!mobNumber || !email || !password){
        setError("All fields are required");
        return;
    }
    try{
      const response=await axios.post(`${BACKEND_URL}/api/auth/signup`,{
        MobNumber:mobNumber,
        email:email,
        password:password
      });
      setIsSignup(true);
      setMessage(response.data.message);
      setError(null)
      navigate("/signin");
    }catch(error:any){
      console.error("Signup failed:",error.response.data);
      setIsSignup(false);
      setMessage(null);
      setError(error.response.data.error || "Signup failed");
    }finally{
      setLoading(false);
    }
  }



  return (
    <div className="min-h-[calc(100vh-70px)] flex items-center justify-center">
      <div className=" bg-white w-full max-w-xs h-auto p-4 shadow-lg border-3  rounded-2xl flex flex-col items-center gap-5">
        <h1 className="text-3xl font-semibold">SignUp</h1>
        <div className="w-48"><img src={logo} alt="" /></div>
        <div className="flex flex-col gap-5 mt-6">
            <input type="number" ref={MobNumberRef}  className="w-full px-5 py-1 border border-gray-500 rounded-2xl outline-none" placeholder="☎️ Mobile number"/>
            <input type="text" ref={emailRef} className="w-full px-5 py-1 border border-gray-500 rounded-2xl outline-none"  placeholder="✉️ E-mail"/>
            <input type="password" ref={passwordRef} className="w-full px-5 py-1 border border-gray-500 rounded-2xl outline-none" placeholder="🔑 Password" />
            <button onClick={handleSignup} className={`bg-green-600 py-2 rounded-2xl text-white  hover:bg-green-700 cursor-pointer`}>{Loading ? "Sign Up...":"Sign Up"}</button>
            {message && <p className="text-green-500 text-sm">{message}</p>}
            {Error && <p className="text-red-500 text-sm">{Error}</p>}
            <div className="flex items-center gap-2">
                <span className="w-1/2 border border-gray-300"></span>
                <p className="text-sm">or</p>
                 <span className="w-1/2 border border-gray-300"></span>
            </div>
            <a href="/signin" className="text-blue-500 hover:underline ">Login</a>
        </div>
      </div>
    </div>
  )
}

export default SignUp