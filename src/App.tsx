import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="country/:countryName" element={<Country />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
