interface HeaderProperties {
  handleDarkMode: () => void;
  isDarkMode: boolean;
}

const Header = ({ handleDarkMode, isDarkMode }: HeaderProperties) => {
  return (
    <>
      <header className="flex justify-between dark:text-white py-5 border-b-4 drop-shadow-md mb-5 md:px-12 px-5 dark:shadow-slate-800 dark:drop-shadow-md dark:shadow-md dark:border-transparent dark:bg-slate-600">
        <h2 className="font-bold md:text-xl text-md">Where in the world?</h2>
        <button onClick={handleDarkMode} className="flex items-center">
          {isDarkMode ? (
            <ion-icon name="moon"></ion-icon>
          ) : (
            <ion-icon name="moon-outline"></ion-icon>
          )}
          <span className="pl-2.5 md:text-md text-sm">Dark mode</span>
        </button>
      </header>
    </>
  );
};

export default Header;
