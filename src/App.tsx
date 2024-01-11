import { useState } from "react";
import CountryCard from "./components/CountryCard";
import Header from "./components/Header";
import data from "./data.json";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  function handleDarkThemeSwitch() {
    setDarkTheme((theme) => !theme);
  }
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="container mx-auto px-12 bg-slate-50 dark:bg-slate-700">
        <Header handleDarkMode={handleDarkThemeSwitch} />
        <div className="grid grid-cols-4 grid-flow-row gap-10">
          {data.map((c) => {
            return (
              <CountryCard
                key={c.alpha3Code}
                flag={c.flag}
                name={c.name}
                population={c.population}
                region={c.region}
                capital={c.capital}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
