interface CountryCardProperties {
  flag?: string;
  name?: string;
  population?: number;
  region?: string;
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
    <div className="rounded-sm shadow-lg dark:text-white dark:shadow-slate-800">
      <img src={flag} alt={name} className="h-auto w-full object-contain " />
      <div className="p-4">
        <h5 className="font-bold text-lg mb-2">{name}</h5>
        <p>
          <span className="font-semibold">Population: </span>
          <span className="font-light">{population}</span>
        </p>
        <p>
          <span className="font-semibold">Region:</span>
          <span className="font-light"> {region}</span>
        </p>
        {capital && (
          <p>
            <span className="font-semibold">Captial:</span>{" "}
            <span className="font-light">{capital}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default CountryCard;
