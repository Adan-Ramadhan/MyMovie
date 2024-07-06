import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../context/MovieProvider";

const Videos = ({ movie_id }) => {
  const { base_url, option } = useContext(MovieContext);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${base_url}/movie/${movie_id}/videos`, option);
        if (response.ok) {
          const data = await response.json();
          setVideos(data.results);
          console.log(data.results);
        }
      } catch (error) {
        console.error("fail to fetch:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="w-full min-h-auto overflow-hidden flex gap-x-3 scrollable scrollbar-thin p-3  overflow-x-scroll">
        {videos.slice(0, 5).map((video) => {
          return (
            <div key={video.id} className="shadow-sm shadow-white">
              <iframe src={`https://youtube.com/embed/${video.key}`} title={video.name}  width="300" height="300"></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Videos;
