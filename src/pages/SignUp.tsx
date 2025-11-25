import logo from "../assets/logo.png";
function SignUp() {
  return (
    <div className="min-h-[calc(100vh-70px)] flex items-center justify-center">
      <div className=" bg-white w-full max-w-xs h-auto p-4 shadow-lg border-3  rounded-2xl flex flex-col items-center gap-5">
        <h1 className="text-3xl font-semibold">SignUp</h1>
        <div className="w-48"><img src={logo} alt="" /></div>
        <div className="flex flex-col gap-5 mt-6">
            <input type="number" className="w-full px-5 py-1 border border-gray-500 rounded-2xl outline-none" placeholder="☎️ Mobile number"/>
            <input type="text" className="w-full px-5 py-1 border border-gray-500 rounded-2xl outline-none"  placeholder="✉️ E-mail"/>
            <input type="password" className="w-full px-5 py-1 border border-gray-500 rounded-2xl outline-none" placeholder="🔑 Password" />
            <button className="bg-green-600 py-2 rounded-2xl text-white  hover:bg-green-700 cursor-pointer">Register</button>
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