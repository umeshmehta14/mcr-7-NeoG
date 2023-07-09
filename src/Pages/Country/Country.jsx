import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../Data/Data";
import Card from "../../Components/Card/Card";

const Country = () => {
  const { continentName } = useParams();
  const allCountry = data?.continents?.find(
    ({ name }) => name === continentName
  ).countries;
  return (
    <div className="container">
      <h2>Top Countries in {continentName} for your next holiday</h2>
      <div className="card-box">
        {allCountry?.map(({ name, image, id }) => (
          <Card key={id} name={name} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Country;
