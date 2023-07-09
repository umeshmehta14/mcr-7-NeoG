import React from "react";
import { data } from "../../Data/Data";
import Card from "../../Components/Card/Card";
import "./Home.css";

const Home = () => {
  const { continents } = data;

  return (
    <div className="container">
      <h1>Welcome to Trip Advisor</h1>
      <h2 className="sub-head">Top Continents for your next holiday</h2>
      <div className="card-box">
        {continents?.map(({ name, image, id }) => (
          <Card key={id} name={name} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Home;
