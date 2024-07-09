import { useState } from "react";
import {  useNavigate } from "react-router-dom";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    // onSearch(query);
    e.preventDefault();
    if(query.trim()){
      navigate(`/search/${query}`);
    }else{
      alert("Query tidak boleh kosong")
    }
    
    
  };
  
  
  
  return (
    <div>
      <form onSubmit={handleSearch} className="flex items-center">
        <input type="text" value={query} placeholder="Search..." onChange={handleInputChange} className="px-3 py-2 border text-slate-700 rounded-lg" />
        <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
        Search
        </button>
      </form>
    </div>
  );
};

export default Search;
