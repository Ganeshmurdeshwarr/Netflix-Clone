import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import search  from '../../assets/search_icon.svg'
import bell_icon  from '../../assets/bell_icon.svg'
import profile_icon  from '../../assets/profile_img.png'
import caret_icon  from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'


const Navbar = () => {
const [logoutBtn , setLogOutBtn] =useState(false)
const [scrolled, setScrolled] =useState(false)

function handlelogOutbtn(){
    setLogOutBtn(prev => !prev)
}

useEffect(()=>{
    function handleScroll(){
        setScrolled(window.scrollY > 20) 
    }
    window.addEventListener('scroll', handleScroll)
  return ()=>window.removeEventListener('scroll', handleScroll)
},[])

  return (
    <header className={`w-[100%] py-4 md:py-[20px] md:px-[6%] px-[3%] tracking-wider flex flex-row  justify-between items-center fixed text-2xl md:text-[14px] text-white ${scrolled? 'bg-black text-white z-10 font-bold':'bg-gradient-to-b from-black/70 to-transparent z-10 font-bold '}`}>

        <div className=' flex gap-x-10 items-center  '>
            <img className='w-20 md:w-28 md:h-8' src={logo} alt="Netflix-logo" />
            <ul className=' hidden md:flex gap-x-4 items-center '>
                <li>Home</li>
                <li>TV Show</li>
                <li>Movies</li>
                <li>New&Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
            </ul>
        </div>
        <div className='flex gap-x-3 md:gap-x-4 items-center '>
            <img className='w-6 md:w-5' src={search} alt="" />
            <p className='font-bold text-sm md:text-xl'>Children</p>
            <img className='w-6 md:w-5' src={bell_icon} alt="" />
            <div onClick={handlelogOutbtn} className='group relative flex cursor-pointer gap-x-3 md:gap-x-1 '>
                <img className='w-8 md:w-8 rounded-md' src={profile_icon} alt="" />
                <img className='w-4 md:w-2' src={caret_icon} alt="" />
                <div className={`md:hidden md:group-hover:block absolute w-max  bg-gray-800 z-10 decoration-0 bottom-[-110%] right-0 px-2 py-2 md:text-xl text-xl ${logoutBtn ? 'block':'hidden'}`}>
                    <button onClick={()=>logout()} className='text-[13px] cursor-pointer'>Sing Out of Netflix</button>
                </div>
            </div>

        </div>

    </header>
  )
}

export default Navbar