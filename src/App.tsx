import CountryCard from "./components/CountryCard";
import Header from "./components/Header";
import data from "./data.json";

function App() {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <div className="grid grid-cols-4 grid-flow-row gap-4">
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
  );
}

export default App;
