import React from "react";

const Navbar = () => {
  return (
    <header class="antialiased">
      <nav class="px-4 lg:px-6 py-2.5 bg-transparent">
        <div class="flex flex-wrap justify-between items-center">
          <div class="flex justify-between items-center">
            <a href="https://flowbite.com" class="flex mr-4">
              <img
                src="https://imgs.search.brave.com/o_Qfx8kjPHmgW0HIEMncXFwKp9f3nxAjtmPl3sBE9lU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmZseGV4dC5j/b20vZmZlL3NpdGV1/aS9hY3F1aXNpdGlv/bi9ob21lL25mbHhs/b2dvLnBuZw"
                class="mr-3 w-40"
                alt="FlowBite Logo"
              />
            </a>
          </div>
          <div className="flex">
            <select className="bg-red-500 px-6 py-1 font-bold text-white rounded-lg">
              <option>English</option>
              <option>Hindi</option>
              <option>Telugu</option>
              <option>Arabic</option>
            </select>
            <button className="border-2 border-red-500 hover:bg-red-500 duration-300 ease-in-out px-6 py-1 font-bold text-white rounded-lg ml-4">
              Sign In
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
