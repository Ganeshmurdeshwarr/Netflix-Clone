import React from 'react'
import facebook from '../../assets/facebook_icon.png'
import youtube from '../../assets/youtube_icon.png'
import twitter from '../../assets/twitter_icon.png'
import insta from '../../assets/instagram_icon.png'

const Footer = () => {
  return (
    <footer className='mt-20 md:px-[20%] ml-16 md:ml-0 pb-20  h-full md:p-10 w-[600px]  md:w-[100%] '>
        <div className='flex w-[50px] md:w-[30px] md:gap-x-4 gap-x-8  '>
            <img  src={facebook} alt="" />
            <img src={youtube} alt="" />
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
        </div>
        <div className=''>
           <ul className='grid grid-cols-2 text-xl md:text-sm md:grid-cols-4 gap-y-4  mt-10 font-semibold'>
            <li>Audio Descriptio</li>
            <li>Help Centre</li>
            <li>Gift Cards</li>
            <li>Meadia Centre</li>
            <li>Investor Relation</li>
            <li>Jobs </li>
            <li>Terms of Use</li>
            <li>Privacy </li>
            <li>Legal Notice</li>
            <li>Cookie Preference </li>
            <li>Corparate Information</li>
            <li>Contact Us</li>
            </ul> 
            <p className='mt-10 text-center'>@ 1999-2025 Netflix , Inc.</p>
        </div>
    </footer>
  )
}

export default Footer