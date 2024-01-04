function Navbar() {
  return (
    <nav className="bg-white rounded-lg shadow-2xl border-gray-200 dark:bg-rose-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./src/assets/logo.png" className="h-12" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap  md:hover:text-pink-500 dark:text-white">
            Negosud
          </span>
        </a>
        <div className="flex md:order-2">
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 dark:text-pink-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full shadow-md p-2 ps-10 text-sm rounded-lg dark:bg-pink-800 dark:placeholder-pink-400 dark:text-white"
              placeholder="Rechercher..."
            />
          </div>
        </div>
        <div
          className="hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <ul className="flex p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:dark:bg-rose-900">
            <li>
              <a
                href="#"
                className="py-2 px-3 text-white md:dark:hover:text-pink-400 md:p-0 "
                aria-current="page"
              >
                Produit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 md:p-0 md:dark:hover:text-pink-400  dark:text-white "
              >
                Mon compte
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 md:p-0 dark:text-white md:dark:hover:text-pink-400  md:dark:hover:bg-transparent"
              >
                Panier
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
