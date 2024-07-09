import { useEffect, useState, useContext } from "react";
import { MovieContext } from "../context/MovieProvider";

const Images = ({ movie_id, isActive }) => {
  const { base_url, option, configImageUrl } = useContext(MovieContext);
  const [posters, setPosters] = useState([]);
  const [backdrops, setBackdrops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${base_url}/movie/${movie_id}/images`, option);
      if (response.ok) {
        const data = await response.json();
        setPosters(data.posters);
        setBackdrops(data.backdrops);
      }
    };

    fetchData();
  }, []);



  return (
    <div className="w-full min-h-auto overflow-hidden flex gap-x-3 scrollable scrollbar-thin p-10  overflow-x-scroll">
      {isActive == "poster" && posters.slice(0, 10).map((poster, index) => {
        return (
          <div key={index} className="w-full min-h-auto shadow-sm shadow-white ">
            <div className="w-32 md:w-40 xl:w-52 min-h-auto overflow-hidden rounded-lg">
              <img src={configImageUrl + poster.file_path} />
            </div>
          </div>
        );
      })}
      {isActive == "backdrop" && backdrops.map((backdrop, index) => {
        return(
          <div key={index} className="w-full min-h-auto shadow-sm shadow-white ">
            <div className="w-60 md:w-80 xl:w-96 min-h-auto overflow-hidden rounded-lg">
              <img src={configImageUrl + backdrop.file_path} />
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Images;
