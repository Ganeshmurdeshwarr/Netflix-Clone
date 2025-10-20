import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const apiKey = "00fe869b1a31942acf5c2b0e37527796";
  const url = `https://api.themoviedb.org/3/movie/${
    category ? category : "now_playing"
  }?api_key=${apiKey}&language=en-US&page=1`;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        const res = await fetch(url);
        const json = await res.json();
        if (!res.ok) throw new Error(`HTTP error ${(res.status)}`);
        let data = json.results;

        setMovies(data || []);
      } catch (err) {
        console.error("Movie not Fetching");
      }
    }
    fetchdata();
  }, [category]);


  const cardRef = useRef();

  function moveCard(event) {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    const container = cardRef.current;
    if (!container) return;

    container.addEventListener("wheel", moveCard);
    return () => container.removeEventListener("wheel", moveCard);
  }, []);

  return ( 
    <div className=" md:mb-8 mb-6">
      <h2 className="md:text-lg text-2xl font-bold mb-5 ">
        {title ? title : "Popular on Netflix"}
      </h2>

      <div
        ref={cardRef}
        className="w-full flex   md:gap-x-3 gap-x-2 overflow-x-scroll scrollbar-hide flex-nowrap "
      >
        {movies.map((item) => (
          <Link
            to={`/player/${item.id}`}
            key={item.id}
            className="md:w-[240px] w-[180px] h-[100px] md:h-auto relative flex-shrink-0"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500` + item.backdrop_path}
              alt={item.original_title || ''}
              className="rounded-lg md:h-auto h-full"
            />
            <h2 className="mt-3 md:text-xl text:sm font-semibold absolute bottom-3 right-3">
              {item.original_title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
