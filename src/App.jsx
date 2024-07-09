import { Suspense } from "react";
import DetailPages from "./pages/DetailPages";
import HomePages from "./pages/HomePages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./component/Search";
import SearchPages from "./pages/SearchPages";

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="/detail-movie/:movie_id" element={<DetailPages />} />
            <Route path="/search/:query" element={<SearchPages />} />
            <Route path="/test" element={<Search />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
