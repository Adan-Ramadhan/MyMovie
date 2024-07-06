import { useEffect, useState, useContext } from "react";
import { MovieContext } from "../context/MovieProvider";

const Images = ({ movie_id }) => {
  const { base_url, option, configImageUrl } = useContext(MovieContext);
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${base_url}/movie/${movie_id}/images`, option);
      if (response.ok) {
        const data = await response.json();
        setPosters(data.posters);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full min-h-auto overflow-hidden flex gap-x-3 scrollable scrollbar-thin p-3  overflow-x-scroll">
      {posters.slice(0, 10).map((poster, index) => {
        return (
          <div key={index} className="w-full min-h-auto shadow-sm shadow-white ">
            <div className="w-32 min-h-auto md:w-36 overflow-hidden rounded-t-lg">
              <img src={configImageUrl + poster.file_path} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Images;
