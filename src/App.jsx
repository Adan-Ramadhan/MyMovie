import { Suspense } from "react";
import DetailPages from "./pages/DetailPages";
import HomePages from "./pages/HomePages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="/detail-movie/:movie_id" element={<DetailPages />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
