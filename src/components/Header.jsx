import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";

function Header() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
      />

      <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/script-name.js"></script>

      <div className="bg-slate-600 h-44 ">
        <div className="flex ">
          <p className="text-white ml-36 mt-5">Angara Online Shopping </p>

          <div class="w-full max-w-sm min-w-[200px] ml-36">
            <div class="relative">
              <input
                class="w-full mt-5 bg-white placeholder:text-slate-500 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Search our store"
              />
              <button
                class="absolute top-1 mt-5 right-1 flex items-center rounded  bg-[#c9944e] py-1.5 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4 mr-2 text-black"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className=" flex ml-auto mr-36 gap-10 ">
            <p className="flex gap-3 mt-5 text-white text-4xl">
              <IoMdHeartEmpty />
              <p className="text-white text-2xl">Wishlist</p>
            </p>

            <p className="text-white text-3xl mt-5 flex gap-5">
              <BsCart3 />
              <p className=" text-white text-2xl">My Cart</p>
            </p>
          </div>
        </div>

        <div className="mt-auto">
          <button className="bg-red-500 h-16 w-60 rounded-md ml-36 ">
            CATEGORY
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
