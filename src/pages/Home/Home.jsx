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
    <div className="w-[100vh]   md:w-[100%]">
      <Navbar />
      <div className=" relative ">
        <img className=" w-[100%] md:w-[100%]  " src={hero_banner} alt="" />
        <div className="absolute bottom-0 md:bottom-50 pl-[6%]">
          <img
            className="mb-8 w-[80%] max-w-[400px] md:w-[90%] md:max-w-[420px] brightness-150 "
            src={hero_title}
            alt=""
          />
          <p className="md:w-[700px] w-[400px] md:text-xl text-xl">
            Discovering his ties to a secret ancient order, a man living in
            morden Istanbul embark on a quest to save the city from an immortal
            enemy.
          </p>

          <div className="flex gap-x-4 mb-8">
            <button className="bg-white text-black hover:bg-gray-400 transition-colors duration-500 flex gap-x-3 w-fit px-4 py-2  mt-10 font-bold rounded-[5px]">
              <img className="w-5 " src={play_icon} alt="" />
              Play
            </button>
            <button className="bg-gray-700 text-white transition-colors duration-500 hover:bg-gray-500 flex gap-x-3 w-fit px-4 py-2  mt-10 font-bold rounded-[5px]">
              <img className="w-5" src={info_icon} alt="" />
              More info
            </button>
          </div>
        </div>
      </div>
      <div className="px-[6%] mt-10">
      <TitleCards  />
      <TitleCards title={'Blockbuster Movies'} category={'top_rated'}/>
      <TitleCards title={'Only on Netfix'} category={'popular'}/>
      <TitleCards title={'Upcoming'} category={'upcoming'}/>
      <TitleCards title={'Top Pics for You'} category={'now_playing'}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
