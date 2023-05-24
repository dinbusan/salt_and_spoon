import React, { useState } from "react";
import {
  Link,
  useMatch,
  useResolvedPath,
  NavLink,
  useLocation,
} from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import useScrollPosition from "../hooks/useScrollPosition";

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const location = useLocation();
  const currentPath = location.pathname;

  const classNames = (...classes) => classes.filter(Boolean).join(" ");

  return (
    <nav
      className={classNames(
        scrollPosition > 0 ? "shadow" : "bg-white text-black",
        "bg-blue-300 duration-300 text-white flex gap-8 px-4 sticky z-30 top-0"
      )}
    >
      {currentPath === "/" ? (
        <Link
          className={classNames(
            currentPath === "/" && scrollPosition > 0 ? "block" : "opacity-0",
            "transition-opacity duration-300 font-rubik text-3xl py-5"
          )}
          to="/"
        >
          SALT & SPOON
        </Link>
      ) : (
        <Link
          className="block transition-opacity duration-300 font-rubik text-3xl py-5"
          to="/"
        >
          SALT & SPOON
        </Link>
      )}
      <ul className="hidden md:flex gap-5 ml-auto py-5 text-xl">
        <CustomLink
          className="hover:underline active:underline duration-1000 underline-offset-8"
          to="/"
        >
          Home
        </CustomLink>
        <CustomLink className="hover:underline underline-offset-8" to="/about">
          About
        </CustomLink>
        <CustomLink
          className="hover:underline underline-offset-8"
          to="/contact"
        >
          Contact
        </CustomLink>
      </ul>
      {/*hamburger*/}
      <div
        onClick={handleClick}
        className="md:hidden ml-auto py-5 z-10"
        style={{ fontSize: "2rem" }}
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*mobile menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "fixed top-0 left-0 w-full h-screen bg-black object-cover flex flex-col pt-36 items-center"
        }
      >
        <li className="py-6 text-4xl">
          <NavLink onClick={handleClick} to="/">
            Home
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <NavLink onClick={handleClick} to="/about">
            About
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <NavLink onClick={handleClick} to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
