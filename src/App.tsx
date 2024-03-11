import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="country/:countryName" element={<Country />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
