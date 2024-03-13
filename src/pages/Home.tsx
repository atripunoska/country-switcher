import { useState, useEffect, useMemo } from "react";

import data from "../data.json";

import CountryCard from "../components/CountryCard";
import { Link } from "react-router-dom";

function removewithfilter(arr) {
  const outputArray = arr.filter(function (v, i, self) {
    // It returns the index of the first
    // instance of each value
    return i == self.indexOf(v);
  });

  return outputArray;
}

const Home = () => {
  const [countries, setCountries] = useState([{}]);
  const [selectedRegion, setSelectedRegion] = useState();

  const regions = data.map((c) => {
    return c?.region;
  });

  const uniqueRegions = removewithfilter(regions);

  function handleRegionChange(event) {
    setSelectedRegion(event.target.value);
  }

  function getFilteredCountries() {
    if (!selectedRegion) {
      return countries;
    }
    return countries.filter((item) => item?.region === selectedRegion);
  }

  const filteredList = useMemo(getFilteredCountries, [
    selectedRegion,
    countries,
  ]);

  useEffect(() => {
    setCountries(data);
  }, []);

  return (
    <>
      <div className="md:flex justify-between md:px-12 mb-7 px-5">
        <div className="mb-3 md:mb-0">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-slate-400">
              <ion-icon name="search-outline"></ion-icon>
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:slate-800 focus:ring-1 sm:text-sm dark:bg-slate-600 dark:text-white dark:border-slate-600"
              placeholder="Search for a country..."
              type="text"
              name="search"
            />
          </label>
        </div>
        <select
          name="selectRegion"
          id=""
          className="h-10 rounded-md border  border-slate-200	 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:slate-800 sm:text-sm dark:border-slate-600 dark:text-white dark:bg-slate-600"
          onChange={handleRegionChange}
        >
          {uniqueRegions.map((region: string) => {
            return (
              <option key={region} value={region}>
                {region}
              </option>
            );
          })}
        </select>
      </div>

      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-flow-row gap-10 px-5 md:px-12">
        {filteredList.map((c) => {
          return (
            <Link to={`country/${c.name}`} key={Math.random() * 2}>
              <CountryCard
                flag={c.flag}
                name={c.name}
                population={c.population}
                region={c.region}
                capital={c?.capital}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
