import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import "./Card.css";
import { useLocation, useNavigate } from "react-router-dom";

const Card = ({ name, image }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = () => {
    if (location?.pathname === "/") {
      navigate(`/country/${name}`);
    } else if (location?.pathname.includes("/country")) {
      navigate(`/city/${name}`);
    } else if (location?.pathname.includes("/city")) {
      navigate(`/detail/${name}`);
    }
  };
  return (
    <div className="card" title={name} onClick={handleNavigate}>
      <img src={image} alt={name} />
      <p>
        <IoLocationSharp />
        <span>{name}</span>
      </p>
    </div>
  );
};

export default Card;
