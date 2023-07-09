import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Country from "./Pages/Country/Country";
import City from "./Pages/City/City";
import SinglePage from "./Pages/Single page/SinglePage";

function App() {
  return (
    <div className="App">
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
