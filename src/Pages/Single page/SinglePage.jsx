import React from "react";
import { data } from "../../Data/Data";
import { Link, useParams } from "react-router-dom";
import "./SinglePage.css";

const SinglePage = () => {
  const { cityName } = useParams();
  const city = data?.continents
    .flatMap((continent) =>
      continent.countries.flatMap((country) => country.destinations)
    )
    .find((destination) => destination.name === cityName);

  const {
    name,
    description,
    image,
    ratings,
    reviews,
    location,
    openingHours,
    ticketPrice,
    website,
  } = city;

  return (
    <div className="container">
      <h1>{cityName}</h1>
      <div className="single-box">
        <img src={image} alt={name} />
        <div className="city-detail">
          <p>
            <strong>Description:</strong>
            {description}
          </p>
          <p>
            <strong>Ratings:</strong>
            {ratings}
          </p>
          <p>
            <strong>Reviews:</strong>
            {reviews}
          </p>
          <p>
            <strong>Location:</strong>
            {location}
          </p>
          <p>
            <strong>Opening Hours:</strong>
            {openingHours}
          </p>
          <p>
            <strong>Ticket Price:</strong>
            {ticketPrice}
          </p>
          <Link to={website}>Website</Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
