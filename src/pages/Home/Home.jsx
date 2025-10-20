import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";



const Home = () => {
  return (
       

    <div className="w-full ">
      <Navbar />
      <div className=" relative  w-screen">
        <img className=" w-full  " src={hero_banner} alt="" />
        <div className="absolute bottom-1 md:bottom-48 pl-[6%]">
          <img
            className="mb-4 md:mb-8 w-[40%] max-w-[300px] md:w-[90%] md:max-w-[420px] brightness-125 "
            src={hero_title}
            alt=""
          />
          <p className="w-[100%] md:w-[50%]  md:text-xl text-[10px]">
            Discovering his ties to a secret ancient order, a man living in
            morden Istanbul embark on a quest to save the city from an immortal
            enemy.
          </p>

          <div className="flex gap-x-4 md:mb-8 mb-4 mt-2 md:mt-10">
            <button className="bg-white text-black hover:bg-gray-400 transition-colors duration-500 flex items-center gap-x-3 w-fit  h-10 md:h-auto  md:px-4 md:py-2 px-2 py-2 md:mt-10  font-bold rounded-[5px] text-[10px] md:text-xl ">
              <img className="md:w-5 w-[15px] h-[15px] md:h-auto " src={play_icon} alt="" />
              Play
            </button>
            <button className="bg-gray-700 text-white transition-colors duration-500 hover:bg-gray-500 flex items-center gap-x-3 w-fit h-10 md:h-auto md:px-4 md:py-2 px-2 py-2 md:mt-10 font-bold rounded-[5px] text-[10px] md:text-xl">
              <img className="md:w-5 w-[15px] h-[15px] md:h-auto " src={info_icon} alt="" />
              More info
            </button>
          </div>
        </div>
      </div>
      <div className="w-full  px-[6%] mt-10">
      <TitleCards  />
      <TitleCards title={'Blockbuster Movies'} category={'top_rated'}/>
      <TitleCards title={'Only on Netflix'} category={'popular'}/>
      <TitleCards title={'Upcoming'} category={'upcoming'}/>
      <TitleCards title={'Top Pics for You'} category={'now_playing'}/>
      </div>
      <Footer/>
    </div>
  
  );
};

export default Home;
