import { Link, useParams } from "react-router-dom";
import countries from "../data.json";

const Country = () => {
  const { countryName } = useParams();

  const country = countries.find((c) => c?.name === countryName);

  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    topLevelDomain,
    languages,
    ...props
  } = country;

  const borderCountries = props?.borders?.map((b: string) =>
    countries.find((c) => c.alpha3Code === b)
  );

  return (
    <>
      <div className="px-16 pt-16">
        <Link
          to="/"
          className="bg-white hover:bg-gray-100 drop-shadow-md px-6 py-2 text-sm dark:border-black-300 dark:bg-black dark:text-white inline-flex justify-center items-center rounded"
        >
          <ion-icon name="arrow-back-outline"></ion-icon>
          <span className="ml-2">Back</span>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-16 p-16 items-stretch dark:bg-slate-700 dark:text-white">
        <div>
          <img
            src={flag}
            alt={name}
            className="h-auto w-full object-contain aspect-video"
          />
        </div>
        <div className="grid content-between">
          <h3 className="text-2xl font-bold mb-4">{name}</h3>
          <div className="flex gap-10">
            <div className="col-1">
              <div className="mb-2">
                <strong className="font-semibold mr-1">Native name:</strong>
                <span> {nativeName}</span>
              </div>
              <div className="mb-2">
                <strong className="font-semibold mr-1">Population:</strong>
                <span> {population}</span>
              </div>
              <div className="mb-2">
                <strong className="font-semibold mr-1">Region:</strong>
                <span> {region}</span>
              </div>
              <div className="mb-2">
                <strong className="font-semibold mr-1">Sub Region:</strong>
                <span> {subregion}</span>
              </div>
              <div className="mb-2">
                <strong className="font-semibold mr-1">Capital:</strong>
                <span> {props?.capital} </span>
              </div>
            </div>
            <div className="col-1">
              <div className="mb-2">
                <strong className="font-semibold mr-1">
                  Top Level Domain:
                </strong>
                <span>{topLevelDomain}</span>
              </div>
              <div className="mb-2">
                <strong className="font-semibold mr-1">Currencies:</strong>
                {props?.currencies?.map((c) => (
                  <span key={c.name}>{c.name}</span>
                ))}
              </div>

              <div className="mb-2">
                <strong className="font-semibold mr-1">Languages:</strong>
                {languages.map((l) => (
                  <span key={l.name}>{l.name}</span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <strong className="font-semibold mr-1">Border countries:</strong>
            {borderCountries?.map((b) => (
              <Link
                to={`/country/${b.name}`}
                key={b.name}
                className="bg-white hover:bg-gray-100 drop-shadow-md px-4 py-2 text-sm dark:border-black-300 dark:bg-black dark:text-white inline-flex justify-center items-center mb-3 rounded ml-2 text-sm"
              >
                {b.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
