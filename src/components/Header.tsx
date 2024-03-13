interface HeaderProperties {
  handleDarkMode: () => void;
  isDarkMode: boolean;
}

const Header = ({ handleDarkMode, isDarkMode }: HeaderProperties) => {
  return (
    <>
      <header className="flex justify-between dark:text-white py-5 border-b-4 drop-shadow-md mb-5 px-12 dark:border-slate-800">
        <h2 className="font-bold text-xl">Where in the world?</h2>
        <button onClick={handleDarkMode} className="flex items-center">
          {isDarkMode ? (
            <ion-icon name="moon"></ion-icon>
          ) : (
            <ion-icon name="moon-outline"></ion-icon>
          )}
          <span className="pl-2.5">Dark mode</span>
        </button>
      </header>
    </>
  );
};

export default Header;
