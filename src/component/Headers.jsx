import Search from "./Search";

const Headers = () => {
 

  return (
    <div className="w-full min-h-auto absolute z-10">
      {/* for mobile navbar */}
      <div className="w-full min-h-auto bg-red-400">
        <Search />

      </div>
    </div>
  );
};

export default Headers;
