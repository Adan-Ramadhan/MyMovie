import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../context/MovieProvider";
import { useParams, Link } from "react-router-dom";
import Headers from "../component/Headers";
import Footer from "../component/Footer";

const SearchPages = () => {
  const { query } = useParams();
  const { base_url, option, configImageUrl } = useContext(MovieContext);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${base_url}/search/movie?query=${query}`, option);
        if (response.ok) {
          const data = await response.json();
          setResults(data.results);
        }
      } catch (error) {
        console.error("fail fetch search:", error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <>
    <Headers/>
      <div className="w-full xl:w-3/4 pt-28 mx-auto min-h-auto flex flex-col gap-5 p-3">
        {results.map((movie) => {
          return (
            <div key={movie.id} className="w-full min-h-auto flex flex-col md:flex-row place-items-center  rounded-lg  shadow-white shadow overflow-hidden">
              <div className=" ">
                <div className="w-full md:w-32 min-h-auto">
                  <img src={configImageUrl + movie.poster_path} className="hidden md:block" />
                  <img src={configImageUrl + movie.backdrop_path} className="block md:hidden" />
                </div>
              </div>
              <div className="p-3">
                <Link to={`/detail-movie/${movie.id}`}>
                <h1 className="text-xl md:text-2xl pb-1 font-bold">{movie.title}</h1>
                </Link>
                <p className="text-xs md:text-sm font-semibold text-slate-300 mb-3">{movie.release_date}</p>
                <p className="text-xs md:text-sm">{movie.overview}</p>
              </div>
            </div>
          );
        })}
      </div>
        <Footer/>
    </>
  );
};

export default SearchPages;
