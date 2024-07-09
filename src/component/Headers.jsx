import Search from "./Search";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

import { useState } from "react";
const Headers = () => {
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div className={`w-full min-h-auto md:bg-transparent xl:w-3/4 xl:left-60 absolute z-10 ${navbar ? "bg-slate-700" : "bg-transparent"}`}>
      <div className="w-full md:hidden flex justify-end p-2 z-10 text-xl">
        <button onClick={handleNavbar}> {navbar ? <RxCross2 className="transition-all duration-300" /> : <RxHamburgerMenu className="text-slate-700 transition-all duration-300" />}</button>
      </div>

      <div className={`w-full min-h-auto md:translate-y-0 ${navbar ? "translate-y-0 transition-all duration-300" : "-translate-y-80 transition-all duration-300"}  `}>
        <Search />
      </div>
    </div>
  );
};

export default Headers;
