import React from "react";
import LogoNavbar from "../../../assets/logo-navbar.png";

export default function Navbar() {
  return (
    <nav className="bg-transparent border-gray-200 dark:bg-gray-900 font-Poppins">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 container">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={LogoNavbar} className="h-24" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">
            BlueHarvest
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium text-xl flex gap-9  md:p-0 mt-4  rounded-lg">
            <li>
              <a href="#" className="block text-white ">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block  text-white">
                Produk
              </a>
            </li>
            <li>
              <a href="#" className="block  text-white">
                Akuakultur
              </a>
            </li>
            <li>
              <a href="#" className="block  text-white">
                Manfaat
              </a>
            </li>
            <li>
              <a href="#" className="block  text-white">
                Testimoni
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
