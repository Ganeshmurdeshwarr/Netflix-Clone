import React, { useState } from "react"
import './Login.css'
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase";
import netflix_spinner from '../../assets/netflix_spinner.gif'
import bg_Image from '../../assets/background_banner.jpg'

const Login = () => {

  const [name, setName] =useState('')
  const [email, setEmail] =useState('')
  const [password, setPassword] =useState('')
  const [singInPage , setSingInPage] = useState(true)
  const [loading ,setLoading] =useState(false)

  const user_auth = async (event)=>{
    event.preventDefault()
    setLoading(true)
    if(singInPage ===true){
      await login(email , password)
    }else{
      await signup(name , email ,password)
    }
    setLoading(false)
  }


function handleSingPage(){
    setSingInPage(prev=> !prev)
}


  return (

      // loading

    loading? <div className="w-screen h-screen flex justify-center items-center  "> <img className="w-[100px]" src={netflix_spinner} alt="" /></div>:

    // login
    <div className="relative h-screen w-screen  bg-cover bg-center" 
     style={{
    backgroundImage: `linear-gradient(#0000007e, #0000007e), url(${bg_Image})`
  }}>
      <div className="w-full md:block flex justify-center pt-10 ">
        <img className="  w-[100px] md:ml-16 md:pt-8    " src={logo} alt="" />
      </div>
      <div className=" w-[80%] md:w-[25%]  bg-black/85  p-14 mt-30 md:mt-10 m-auto">
        {singInPage?<h1 className="text-xl font-bold">Sing In </h1>:<h1 className="text-xl font-bold">Sing Up </h1>}

      { singInPage ?  (<form onSubmit={user_auth}>
          <input value={email} onChange={(e)=>setEmail(e.target.value)}
            className="w-full bg-gray-800  mt-8 px-2 py-2 placeholder:text-white rounded-[5px] "
            type="email"
            placeholder="Enter your Email "
            required
          />
          <input value={password} 
              onChange={(e)=>setPassword(e.target.value)}
            className="w-full bg-gray-800  mt-5 px-2 py-2 placeholder:text-white rounded-[5px] "
            type="password"
            placeholder="Enter your Password"
            required
          />
        <button   type="submit" className="w-full mt-6 bg-red-600 py-2 text-white rounded-[5px]">
          Sing In
        </button>
        </form>) :
        (<form onSubmit={user_auth}>
          <input value={name} onChange={(e)=>setName(e.target.value)}
            className="w-full bg-gray-800  mt-8 px-2 py-2 placeholder:text-white rounded-[5px] "
            type="text"
            placeholder="Enter your Name "
            required
          />
          <input value={email} onChange={(e)=>setEmail(e.target.value)}
            className="w-full bg-gray-800  mt-5 px-2 py-2 placeholder:text-white rounded-[5px] "
            type="email"
            placeholder="Enter your Email "
            required
          />
          <input value={password} onChange={(e)=>setPassword(e.target.value)}
            className="w-full bg-gray-800  mt-5 px-2 py-2 placeholder:text-white rounded-[5px] "
            type="password"
            placeholder="Enter your Password"
            required
          />
        <button onClick={user_auth} type="submit" className="w-full mt-6 bg-red-600 py-2 text-white rounded-[5px]">
          Sing Up
        </button>
        </form>)}


        <div className="flex items-center mt-2 text-white gap-x-2">
  <input id="remember" type="checkbox" className="w-4 h-4" />
  <label htmlFor="remember" className="text-sm">
    Remember me
  </label>

  <a href="#" className="ml-auto text-sm text-gray-400 hover:underline">
    Need Help?
  </a>
</div>

       {singInPage ? <div className="flex items-center mt-8 text-gray-500 gap-x-5">
        <h2>New to Netflix?</h2>
        <button onClick={handleSingPage} className="text-white font-semibold">Sign Up Now</button>
        </div> :<div className="flex items-center mt-8 text-gray-500 gap-x-5 text-sm">
        <h2>Already have account?</h2>
        <button onClick={handleSingPage} className="text-white font-semibold">Sign In Now</button>
        </div>}
      </div>
    </div>
  );
};

export default Login;
