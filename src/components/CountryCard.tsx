import React from "react";

interface CountryCardProperties {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital?: string;
}

const CountryCard = ({
  flag,
  name,
  population,
  region,
  capital,
}: CountryCardProperties) => {
  return (
    <div className="rounded-sm shadow-lg dark:text-white">
      <img src={flag} alt={name} />
      <div className="p-4">
        <h5 className="font-bold">{name}</h5>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Captial: {capital}</p>
      </div>
    </div>
  );
};

export default CountryCard;
