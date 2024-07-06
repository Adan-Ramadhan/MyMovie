import { useContext } from "react";
import { MovieContext } from "../context/MovieProvider";
import { Link } from "react-router-dom";
const Discover = () => {
  const { discover, configImageUrl } = useContext(MovieContext);
  return (
    <div>
      <div className="w-full min-h-auto xl:w-3/4 mx-auto p-3">
        <h1 className="text-2xl font-bold">Trending</h1>
      </div>
      <div className="w-full min-h-auto xl:w-3/4  xl:shadow-white  mx-auto gap-x-3 p-3 flex scrollable scrollbar-thin overflow-x-scroll">
        {discover.map((movie) => {
          return (
            <div key={movie.id} className="w-full min-h-auto rounded-lg shadow-lg">
              <div className="w-48 h-60 xl:w-60 xl:h-80 overflow-hidden rounded-t-lg">
                <img src={configImageUrl + movie.poster_path} className="object-cover w-full h-full" alt={movie.title} />
              </div>
              <div className="p-2">
                <Link to={`/detail-movie/${movie.id}`} ><h1 className="font-semibold text-sm xl:text-lg hover:text-slate-400">{movie.title}</h1></Link>
                <p className="font-light text-xs text-slate-300 tracking-wide">{movie.release_date}</p>
                <p className="font-light text-xs text-slate-300 tracking-wide">{movie.homepage}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Discover;
