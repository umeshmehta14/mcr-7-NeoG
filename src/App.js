import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Country from "./Pages/Country/Country";
import City from "./Pages/City/City";
import SinglePage from "./Pages/Single page/SinglePage";
import { AiOutlineArrowLeft } from "react-icons/ai";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="App">
      {location?.pathname === "/" ? (
        ""
      ) : (
        <AiOutlineArrowLeft className="back-btn" onClick={() => navigate(-1)} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="country/:continentName" element={<Country />} />
        <Route path="city/:countryName" element={<City />} />
        <Route path="detail/:cityName" element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
