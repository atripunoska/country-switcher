import { Link, useParams } from "react-router-dom";
import countries from "../data.json";

const Country = () => {
  const { countryName } = useParams();

  const country = countries.find((c) => c?.name === countryName);

  const {
    flag,
    name,
    capital,
    nativeName,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;
  return (
    <div className="grid grid-cols-2 gap-5 p-16">
      <div>
        <Link
          to="/"
          className="bg-dark-100 px-6 py-2 text-sm border-black-300 bg-black text-white inline-flex justify-center items-center mb-3 rounded"
        >
          <ion-icon name="arrow-back-outline"></ion-icon> <span>Back</span>
        </Link>
        <img
          src={flag}
          alt={name}
          className="h-auto w-full object-cover aspect-video"
        />
      </div>
      <div>
        <h3 className="text-2xl font-bold">{name}</h3>
        <div className="flex">
          <div className="col-1">
            <p>
              <strong>Native name:</strong>
              {nativeName}
            </p>
            <p>
              <strong>Population:</strong>
              {population}
            </p>
            <p>
              <strong>Region:</strong>
              {region}
            </p>
            <p>
              <strong>Sub Region:</strong>
              {subregion}
            </p>
            <p>
              <strong>Capital:</strong>
              {capital}
            </p>
          </div>
          <div className="col-1">
            <p>
              <strong>Top Level Domain:</strong>
              {topLevelDomain}
            </p>
            <p>
              <strong>Currencies:</strong>
              {currencies.map((c) => (
                <span key={c.name}>{c.name}</span>
              ))}
            </p>

            <p>
              <strong>Languages:</strong>
              {languages.map((l) => (
                <span key={l.name}>{l.name}</span>
              ))}
            </p>
          </div>
        </div>
        <div>
          Border countries:{" "}
          {borders.map((b) => (
            <span>{b},</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Country;
