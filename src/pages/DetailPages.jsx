import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../context/MovieProvider";
import { useParams } from "react-router-dom";
import Cast from "../provider/Cast";
import Media from "../provider/Media";
import Headers from "../component/Headers";
import Footer from "../component/Footer";

const DetailPages = () => {
  const { base_url, option, configImageUrl } = useContext(MovieContext);
  const { movie_id } = useParams();
  const [detailMovie, setDetailMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${base_url}/movie/${movie_id}`, option);
        if (response.ok) {
          const data = await response.json();
          setDetailMovie(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [movie_id]);

  if (!detailMovie) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {detailMovie ? (

        <div className="w-full min-h-auto ">
            <Headers/>

          <div className="w-full relative min-h-auto lg:h-[600px] overflow-hidden">
            <div className="w-full ">
              <img src={configImageUrl + detailMovie.backdrop_path} alt={detailMovie.title} className="object-cover xl:object-none xl:object-bottom" />
            </div>

            <div className="absolute px-3 pt-5 top-0 w-full h-full  bg-gradient-to-r from-slate-800 via-slate-800/70 to-slate-300/50">
              <div className="flex place-items-center gap-x-3  mx-auto w-full  xl:px-0 xl:w-1/2 h-full">
                <div>
                  <div className="w-80 md:w-60 h-auto hidden md:block rounded-lg overflow-hidden">
                    <img src={configImageUrl + detailMovie.poster_path} alt={detailMovie.title} />
                  </div>
                </div>

                <div className="text-white pr-10">
                  <h1 className="text-2xl md:text-3xl xl:mb-2 lg:text-5xl xl:text-6xl font-bold">{detailMovie.title}</h1>

                  <div className="flex mb-2 place-items-center gap-x-2">
                    {detailMovie.genres &&
                      detailMovie.genres.map((genre) => {
                        return (
                          <div key={genre.id}>
                            <p className="text-xs xl:text-sm">{genre.name},</p>
                          </div>
                        );
                      })}
                  </div>

                  <i className="text-xs md:text-base lg:text-sm text-slate-300 font-normal mb-2 xl:mb-4">{detailMovie.tagline}</i>
                  <p className="text-lg xl:text-xl font-bold">Overview</p>
                  <p className="text-xs md:text-base lg:text-sm xl:text-lg font-normal ">{detailMovie.overview}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-3/4 min-h-auto p-4 mx-auto flex flex-col gap-y-10">
            <Cast movie_id={movie_id} />
            <Media movie_id={movie_id} />
          </div>
          <Footer/>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default DetailPages;
