import { useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  function handleDarkThemeSwitch() {
    setDarkTheme((theme) => !theme);
  }

  return (
    <>
      <div className={darkTheme ? "dark" : ""}>
        <div className="container mx-auto  bg-slate-50 dark:bg-slate-700 h-full min-h-dvh pb-10">
          <Header
            handleDarkMode={handleDarkThemeSwitch}
            isDarkMode={darkTheme}
          />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SharedLayout;
