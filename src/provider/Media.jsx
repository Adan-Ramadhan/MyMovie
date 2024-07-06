import { Link } from "react-router-dom";
import Images from "../component/Images";
import Videos from "../component/Videos";
import { useState } from "react";

const Media = ({movie_id}) => {
  
const [isActive, setIsActive] = useState(false);


  return(
    <div className="w-full min-h-auto mb-3">
      <div>
        <div className="flex place-items-center gap-x-4">
          <div><h1 className="font-semibold text-lg md:text-xl lg:text-2xl tracking-wide">Media</h1></div>
          <ul className="flex place-items-center text-sm gap-x-3">
            <li><Link to="">Posters</Link></li>
            <li><Link to="">Videos</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col gap-y-10">
      <Images movie_id={movie_id} />
      <Videos movie_id={movie_id} />
      </div>
    </div>
  )
}

export default Media;