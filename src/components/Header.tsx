import React from "react";

const Header = ({ handleDarkMode }) => {
  return (
    <header className="flex justify-between dark:text-white">
      <h2 className="font-bold ">Where in the world?</h2>
      <button onClick={handleDarkMode}>Dark mode</button>
    </header>
  );
};

export default Header;
