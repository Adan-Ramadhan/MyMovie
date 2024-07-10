import { useContext } from "react";
import { MovieContext } from "../context/MovieProvider";
import { Link } from "react-router-dom";

const Toprate = () => {
  const { toprate, configImageUrl } = useContext(MovieContext);
  console.log(toprate);
  return (
    <div className="w-full min-h-auto xl:w-3/4 mx-auto p-3">
      <h1 className="text-2xl font-bold">Top Rate Movie</h1>

      <div className="w-full min-h-auto xl:w-3/4  xl:shadow-white  mx-auto gap-x-3 p-3 flex scrollable scrollbar-thin overflow-x-scroll">
        {toprate.map((movie) => {
          return (
            <div key={movie.id} className="w-full min-h-auto rounded-lg shadow-sm shadow-white">
              <div className="relative w-48 h-60 xl:w-60 xl:h-80 overflow-hidden rounded-t-lg">
                <img src={configImageUrl + movie.poster_path} alt={movie.title} />
                <div className="w-10 h-10 bg-red-700 overflow-hidden flex place-items-center justify-center absolute top-0 right-0 rounded-full z-10">
                  <p className="text-xs font-semibold">{movie.vote_average}</p>
                </div>
              </div>

              <div className="p-2">
                <Link to={`/detail-movie/${movie.id}`}>
                  <h1 className="font-semibold text-sm xl:text-lg hover:text-slate-400">{movie.title}</h1>
                </Link>
                <p className="font-light text-xs text-slate-300 tracking-wide">{movie.release_date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Toprate;
