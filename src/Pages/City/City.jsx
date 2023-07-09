import React from "react";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card/Card";
import { data } from "../../Data/Data";

const City = () => {
  const { countryName } = useParams();
  const allCity = data?.continents
    ?.flatMap((continent) => continent.countries)
    ?.find((country) => country.name === countryName).destinations;

  return (
    <div className="container">
      <h2>Top Countries in {countryName} for your next holiday</h2>
      <div className="card-box">
        {allCity?.map(({ name, image, id }) => (
          <Card key={id} name={name} image={image} />
        ))}
      </div>
    </div>
  );
};

export default City;
