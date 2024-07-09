import Search from "./Search";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

import { useState } from "react";
const Headers = () => {
  const [navbar, setNavbar] = useState(false);
 
  const handleNavbar = () => {
    setNavbar(!navbar);
  }
  
  return (
    <div className={`w-full min-h-auto absolute z-10 ${navbar ? "bg-slate-700" : "bg-transparent"}`}>
      <div className="w-full flex justify-end p-2 z-10 text-xl"><button onClick={handleNavbar}> {navbar ?  <RxCross2 /> : <RxHamburgerMenu/>}</button></div>

      <div className={`w-full min-h-auto  ${navbar ? "translate-y-0 transition-all duration-300" : "-translate-y-80 transition-all duration-300"}  `}>
        <Search />

      </div>
    </div>
  );
};

export default Headers;
