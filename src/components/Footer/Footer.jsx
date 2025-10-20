import React from 'react'
import facebook from '../../assets/facebook_icon.png'
import youtube from '../../assets/youtube_icon.png'
import twitter from '../../assets/twitter_icon.png'
import insta from '../../assets/instagram_icon.png'

const Footer = () => {
  return (
    <footer className='mt-20 px-[10%] md:px-[20%] md:pb-20 pb-8  h-full  w-full'>
        <div className='flex w-[30px]  gap-x-4  '>
            <img  src={facebook} alt="facebook_icon" />
            <img src={youtube} alt="youtub_icon" />
            <img src={insta} alt="instagrem_icon" />
            <img src={twitter} alt="twitter_icon" />
        </div>
        <div className=''>
           <ul className='grid grid-cols-2  text-sm md:text-sm md:grid-cols-4 gap-y-4 md:gap-x-4 gap-x-16  mt-10 font-semibold'>
            <li>Audio Description</li>
            <li>Help Centre</li>
            <li>Gift Cards</li>
            <li>Media Centre</li>
            <li>Investor Relation</li>
            <li>Jobs </li>
            <li>Terms of Use</li>
            <li>Privacy </li>
            <li>Legal Notice</li>
            <li>Cookie Preference </li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
            </ul> 
            <p className='mt-8 text-center '>@ 1999-2025 Netflix , Inc.</p>
        </div>
    </footer>
  )
}

export default Footer