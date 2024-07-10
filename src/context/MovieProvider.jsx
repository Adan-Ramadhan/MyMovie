import { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const base_url = "https://api.themoviedb.org/3";
  const configImageUrl = "https://image.tmdb.org/t/p/original";

  const [discover, setDiscover] = useState([]);
  const [trending, setTrending] = useState([]);
  const [toprate, setToprate] = useState([]);
  
  const option = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGViMGVkYmY0YzU5M2M1MmQ3NTMyNmI3MGNiOGM0MyIsIm5iZiI6MTcxOTM3NzQ5Ni44MDIyMzksInN1YiI6IjY2N2I4YTlkMzIyZmFmOThmN2JhZWViMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxjvlPi5Z6tKZxHNBn34euVx3kigYSqrn9II-XRFMxc",
    },
  };

  useEffect(() => {
    const fetchDataDiscover = async () => {
      try {
        const response = await fetch(`${base_url}/discover/movie`, option);
        if (response.ok) {
          const data = await response.json();
          setDiscover(data.results);
        }
      } catch (error) {
        console.error("error:", error);
      }
    };
    fetchDataDiscover();

    const fetchDataTrending = async () => {
      try {
        const response = await fetch(`${base_url}/trending/movie/day`, option);
        if (response.ok) {
          const data = await response.json();
          setTrending(data.results);
        }
      } catch (error) {
        console.error("error:", error);
      }
    };
    fetchDataTrending();


    const fetchMovieTopRate = async () => {
      try{

        const response = await fetch(`${base_url}/movie/top_rated`, option)
        if(response.ok){
          const data = await response.json();
          setToprate(data.results)
        }
      }catch(error){
        console.error("fail to fetching dat movie top rate:", error)
      }

    }
    fetchMovieTopRate();

  }, []);

  return <MovieContext.Provider value={{ base_url, option, configImageUrl, discover, trending, toprate}}>{children}</MovieContext.Provider>;
};

export default MovieProvider;
