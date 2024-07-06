import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../context/MovieProvider";
import { useSearchParams } from "react-router-dom";

const Cast = ({ movie_id }) => {
  
  const { base_url, option, configImageUrl } = useContext(MovieContext);
  const [casts, setCasts]= useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${base_url}/movie/${movie_id}/credits`, option);
        if (response.ok) {
          const data = await response.json();
          setCasts(data.cast);
        }
      } catch (error) {
        console.error("fail fetch data:", error);
      }
    };

    fetchData();
  }, [movie_id]);

  return (
    <>
      <div className="w-full ">
        <h1 className="font-semibold text-lg md:text-xl lg:text-2xl tracking-wide">Series Cast</h1>

        <div className="w-full min-h-auto flex gap-x-3 scrollable scrollbar-thin p-3  overflow-x-scroll">
          {casts.map(cast => {
            return(
              <div key={cast.id} className="w-full min-h-auto shadow-sm shadow-white">
                <div className="w-32 md:w-36 min-h-auto overflow-hidden rounded-t-lg">
                  <img src={configImageUrl + cast.profile_path} alt={cast.name} />
                </div>
                <div className="p-2 tracking-wide">
                  <h1 className="text-xs lg:text-sm font-semibold">{cast.name}</h1>
                  <p className="text-xs lg:text-sm font-light">{cast.character}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Cast;
