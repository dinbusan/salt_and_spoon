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

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

  return (
    <nav className="bg-sky-950 text-sky-50 duration-300 flex gap-8 px-4 sticky z-30 top-0">
      {currentPath === "/" ? (
        <Link
          className={classNames(
            // currentPath === "/" && scrollPosition > 0
            //   ? "block cursor-pointer"
            //   : "opacity-0 cursor-default",
            "transition-opacity duration-300 font-rubik tracking-wider text-xl sm:text-3xl py-5"
          )}
          onClick={scrollToTop}
          to="/"
        >
          SALT & SPOON
        </Link>
      ) : (
        <Link
          className="block tracking-wider transition-opacity duration-300 font-rubik text-3xl py-5"
          to="/"
        >
          SALT & SPOON
        </Link>
      )}
      <ul className="hidden font-thasadith md:flex gap-10 mr-20 ml-auto py-5 text-2xl tracking-wider">
        <CustomLink
          className="relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all after:origin-left after:h-[1px] after:bg-white"
          to="/"
        >
          Home
        </CustomLink>
        <CustomLink
          className="relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all after:origin-left after:h-[1px] after:bg-white"
          to="/about"
        >
          About
        </CustomLink>
        <CustomLink
          className="relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all after:origin-left after:h-[1px] after:bg-white"
          to="/menu"
        >
          Menu
        </CustomLink>
        <CustomLink
          className="relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all after:origin-left after:h-[1px] after:bg-white"
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
            : "fixed top-0 font-thasadith left-0 w-full h-screen bg-sky-950 object-cover flex flex-col pt-36 items-center"
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
          <NavLink onClick={handleClick} to="/menu">
            Menu
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
