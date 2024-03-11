import React, { useState, useEffect, useMemo } from "react";

import data from "../data.json";
import Header from "../components/Header";
import CountryCard from "../components/CountryCard";
import { Link, Outlet } from "react-router-dom";

// let outputArray = [];

function removewithfilter(arr) {
  const outputArray = arr.filter(function (v, i, self) {
    // It returns the index of the first
    // instance of each value
    return i == self.indexOf(v);
  });

  return outputArray;
}

const Home = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [countries, setCountries] = useState([{}]);
  const [selectedRegion, setSelectedRegion] = useState();

  const regions = data.map((c) => {
    return c?.region;
  });

  const uniqueRegions = removewithfilter(regions);

  function handleDarkThemeSwitch() {
    setDarkTheme((theme) => !theme);
  }

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
    <div className={darkTheme ? "dark" : ""}>
      <div className="container mx-auto  bg-slate-50 dark:bg-slate-700">
        <Header handleDarkMode={handleDarkThemeSwitch} isDarkMode={darkTheme} />
        <Outlet />
        <div className="flex justify-between px-12 mb-7">
          <input type="text" name="" id="" />
          <select
            name="selectRegion"
            id=""
            className="h-12 rounded-md border  border-slate-200	 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
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

        <div className="grid grid-cols-4 grid-flow-row gap-10 px-12">
          {filteredList.map((c) => {
            return (
              <Link to={`country/${c.name}`} key={Math.random() * 2}>
                <CountryCard
                  flag={c.flag}
                  name={c.name}
                  population={c.population}
                  region={c.region}
                  capital={c.capital}
                />
              </Link>
            );
          })}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
