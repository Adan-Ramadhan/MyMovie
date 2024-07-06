import { useContext, useEffect, useRef, useState } from "react";
import { MovieContext } from "../context/MovieProvider";
import { MdDateRange } from "react-icons/md";

const Hero = () => {
  const { trending, configImageUrl } = useContext(MovieContext);

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trending.length);
    }, 5000);

    return () => resetTimeout();
  }, [currentIndex, trending.length]);

  const handleMouseDown = (e) => {
    const startX = e.pageX;

    const handleMouseMove = (e) => {
      const endX = e.pageX;

      if (startX - endX > 50) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % trending.length);
        document.removeEventListener("mousemove", handleMouseMove);
      } else if (startX - endX < -50) {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + trending.length) % trending.length);
        document.removeEventListener("mousemove", handleMouseMove);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", handleMouseMove);
      },
      { once: true }
    );
  };

  if (trending.length === 0) return null;

  return (
    <div className="relative w-full min-h-auto xl:h-[600px]  overflow-hidden" onMouseDown={handleMouseDown}>
      <div className="flex transition-transform duration-300 cursor-grab" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {trending.map((movie) => {
          return (
            <div key={movie.id} className="w-full  flex shrink-0">
              <div className="w-full min-h-auto xl:h-[600px]">
                <img src={configImageUrl + movie.backdrop_path} className="object-cover w-full min-h-auto xl:h-[600px]" />
              </div>

              <div className="absolute flex flex-col justify-end xl:justify-center p-3 xl:p-10 w-full xl:w-1/2  h-full  bg-gradient-to-r from-black  ">
                <h1 className="font-bold text-xl md:text-3xl xl:text-8xl mb-3">{movie.title}</h1>
                <p className="font-light text-xs md:text-sm xl:text-lg pr-20 tracking-wider flex place-items-center gap-x-2 mb-2">
                  <MdDateRange className="text-xs md:text-sm xl:text-lg" /> {movie.release_date}
                </p>
                <p className="font-light text-xs md:lg xl:text-xl line-clamp-3 pr-40 tracking-wider ">{movie.overview}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
