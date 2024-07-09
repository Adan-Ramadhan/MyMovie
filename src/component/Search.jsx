import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    // onSearch(query);
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query}`);
    } else {
      alert("Query tidak boleh kosong");
    }
  };



  return (
    <div>
      {/* for navbar mobile */}
      <div className="w-full p-3 ">
        <form onSubmit={handleSearch} className="flex items-center mb-4">
          <input type="text" value={query} placeholder="Search..." onChange={handleInputChange} className="w-full rounded-bl-lg rounded-tl-lg px-3 py-2 border text-slate-700 " />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-tr-lg rounded-br-lg">
            Search
          </button>
        </form>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Search;
