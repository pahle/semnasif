import { useState } from "react";

import { close, logosemnasif, menu } from "../assets";

import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`w-full flex py-6 justify-between items-center navbar sm:px-16 px-6 ${toggle ? "border-b-2" : "shadow-md"
      }`}>
      <a href="/">
        <img
          src={logosemnasif}
          alt="semnasif"
          className="w-[170px]"
        />
      </a>

      <ul className="list-none md:flex hidden justify-end items-center">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-secondary transition-colors duration-300 ${index === navLinks.length - 1
              ? "mr-0"
              : "mr-10"
              }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "top-[103px] opacity-100" : "top-[-320px] opacity-0"
            } flex p-6 bg-white absolute -right-0 w-full my-2 min-w-[200px] justify-center ease-in-out transition-all duration-300 z-[-40] shadow-lg`}
        >
          <ul className="list-none flex flex-col justify-end items-center">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1
                  ? "mr-0"
                  : "mb-4"
                  }`}
                onClick={() => setToggle((prev) => !prev)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
