import Images from "../component/Images";
import Videos from "../component/Videos";
import { useState } from "react";

const Media = ({ movie_id }) => {
  const [isActive, setIsActive] = useState("poster");

  return (
    <div className="w-full min-h-auto mb-3">
      <div>
        <div className="flex place-items-center gap-x-4">
          <div>
            <h1 className="font-semibold text-lg md:text-xl lg:text-2xl tracking-wide">Media</h1>
          </div>
          <ul className="flex place-items-center gap-x-3">
            <li>
              <button onClick={() => setIsActive("poster")} className={`text-sm xl:text-lg text-white hover:text-gray-300 ${isActive === "poster" ? "underline underline-offset-8 decoration-4 text-gray-300" : "" }`}>Posters</button>
            </li>
            <li>
              <button onClick={() => setIsActive("backdrop")} className={`text-sm xl:text-lg text-white hover:text-gray-300 ${isActive === "backdrop" ? "underline underline-offset-8 decoration-4 text-gray-300" : "" }`}>backdrop</button>
            </li>
            <li>
              <button onClick={() => setIsActive("video")} className={`text-sm xl:text-lg text-white hover:text-gray-300 ${isActive === "video" ? "underline underline-offset-8 decoration-4 text-gray-300" : "" }`}>Videos</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-y-10">
        {isActive === "poster" && <Images movie_id={movie_id} isActive={isActive} />}
        {isActive === "backdrop" && <Images movie_id={movie_id} isActive={isActive} />}
        {isActive === "video" && <Videos movie_id={movie_id} />}
      </div>
    </div>
  );
};

export default Media;
