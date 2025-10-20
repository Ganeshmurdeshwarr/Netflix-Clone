import React, { useEffect, useState } from "react";
import back_arrow from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const [playerdata, setPlayerdata] = useState(null);
  const navigate =useNavigate()
  const apiKey = "00fe869b1a31942acf5c2b0e37527796";


  useEffect(() => {                                     
    async function fetchdata() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
        );
        const json = await res.json();
        console.log(json.results)
        if (json.results && json.results.length > 0) {
          setPlayerdata(json.results[0]);
        } else {
          console.warn("No videos available for this movie");
        }
      } catch (err) {
        console.log("data not fetching");
      }
    }
    fetchdata();
  }, [id]);
 
 if (!playerdata) {
    return (
      <div className="h-screen w-screen bg-black flex justify-center items-center text-white">
        Loading video...
      </div>
    );
  }
  return (
    <div className=" h-[100vh] w-screen bg-black flex flex-col justify-center items-center ">
      <img 
        className="absolute top-0 left-0 w-10 ml-1 mt-1 cursor-pointer "
        src={back_arrow}
        alt=""  onClick={()=>navigate(-1)}
      />
      <iframe
        className="mt-2 h-[25%] md:h-[90%] w-[95%] md:w-[94%] "
        title="trailer"
        allowFullScreen
        src={`https://www.youtube.com/embed/${playerdata.key}`}
        frameBorder="0"
      ></iframe>

      <div className="flex md:flex-row flex-col gap-y-2 w-[90%]  mt-2 justify-between items-center text-white text-sm md:text-xl">
        <p>{playerdata.published_at?.slice(0,10) || 'N/A'}</p>
        <p>{playerdata.name || 'N/A'}</p>
        <p>{playerdata.type || 'N/A'}</p>
      </div>
    </div>
  );
};

export default Player;
