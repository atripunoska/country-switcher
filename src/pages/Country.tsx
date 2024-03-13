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
      <div className="px-7 md:px-16 pt-6 md:pt-16">
        <Link
          to="/"
          className="bg-white font-light hover:bg-gray-100 drop-shadow-md px-6 py-2 text-sm dark:border-slate-700 dark:bg-slate-600 dark:text-white inline-flex justify-center items-center rounded hover:dark:bg-slate-800"
        >
          <ion-icon name="arrow-back-outline"></ion-icon>
          <span className="ml-2">Back</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:p-16 p-7 items-stretch dark:bg-slate-700 dark:text-white">
        <div>
          <img
            src={flag}
            alt={name}
            className="h-auto w-full object-contain aspect-video"
          />
        </div>
        <div className="grid content-between">
          <h3 className="text-2xl font-bold mb-4">{name}</h3>
          <div className="flex gap-10 md:flex-row flex-col">
            <div className="col-1">
              <div className="mb-2">
                <strong className="font-semibold mr-1">Native name:</strong>
                <span className="font-light"> {nativeName}</span>
              </div>
              <div className="mb-2">
                <strong className="font-semibold mr-1">Population:</strong>
                <span className="font-light"> {population}</span>
              </div>
              <div className="mb-2">
                <strong className="font-semibold mr-1">Region:</strong>
                <span className="font-light"> {region}</span>
              </div>
              <div className="mb-2">
                <strong className="font-semibold mr-1">Sub Region:</strong>
                <span className="font-light"> {subregion}</span>
              </div>
              {props?.capital && (
                <div className="mb-2">
                  <strong className="font-semibold mr-1">Capital:</strong>
                  <span className="font-light"> {props?.capital} </span>
                </div>
              )}
            </div>
            <div className="col-1">
              <div className="mb-2">
                <strong className="font-semibold mr-1">
                  Top Level Domain:
                </strong>
                <span className="font-light">{topLevelDomain}</span>
              </div>

              {props?.currencies && (
                <div className="mb-2">
                  <strong className="font-semibold mr-1">Currencies:</strong>
                  {props?.currencies?.map((c) => (
                    <span className="font-light" key={c.name}>
                      {c.name}
                    </span>
                  ))}
                </div>
              )}

              <div className="mb-2">
                <strong className="font-semibold mr-1">Languages:</strong>
                {languages.map((l: { name: string }, i: number) => (
                  <span key={l.name} className="font-light">
                    {l.name}
                    {i < languages.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            {borderCountries && (
              <>
                <strong className="font-semibold mr-1 block md:inline-block mb-2 md:mb-0">
                  Border countries:
                </strong>
                {borderCountries?.map((b) => (
                  <Link
                    to={`/country/${b.name}`}
                    key={b.name}
                    className="bg-white font-light hover:bg-gray-100 drop-shadow-md px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-600 dark:text-white inline-flex justify-center items-center mb-3 rounded mr-2 text-sm hover:dark:bg-slate-800"
                  >
                    {b.name}
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
