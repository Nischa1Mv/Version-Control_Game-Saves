function Search() {
  return (
    <>
      <div className="relative">
        {/* Container for the search input with a border and rounded corners */}
        <div className="w-fit h-fit border rounded-xl">
          {/* Search input field */}
          <input
            className="px-2 py-1 bg-transparent focus:outline-none border-b-2 border-white text-white border-opacity-50 rounded-xl"
            type="search" // Specifies that this is a search input field
            placeholder="Search" // Placeholder text that prompts the user to search
          />
        </div>

        {/* Search icon positioned to the right of the input */}
        <div className="absolute right-1 top-1 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            {/* Magnifying glass icon (typically used for search) */}
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Search;
