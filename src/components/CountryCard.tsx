import React from "react";

const CountryCard = ({ flag, name, population, region, capital }) => {
  return (
    <div className="">
      <img src={flag} alt={name} />
      <h5>{name}</h5>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Captial: {capital}</p>
    </div>
  );
};

export default CountryCard;
