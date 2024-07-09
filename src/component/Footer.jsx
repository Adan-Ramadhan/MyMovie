import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative mt-32">
      <div className="w-full min-h-auto absolute bottom-0 flex justify-between xl:justify-around px-3 py-5 bg-slate-700 mt-10">
        <div>
          <p className="text-sm tracking-wide">Create By Adan Ramadhan 2024</p>
        </div>

        <div className="flex place-items-center gap-x-3">
          <a href="instagram.com/adaan_ramadhan" className="text-white hover:text-slate-400">
            <FaInstagram />
          </a>
          <a href="https://github.com/Adan-Ramadhan" className="text-white hover:text-slate-400">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
