import React, {useState} from 'react'
import { Link, useMatch, useResolvedPath, NavLink } from 'react-router-dom'
import { FaBars, FaTimes, } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <nav className="bg-gray-800 text-white flex justify-between items-stretch gap-8 p-4">
      <Link to="/">Salt and Spoon</Link>
      <ul className="hidden md:flex gap-1">
        <CustomLink className="h-100 hover:bg-gray-300" to="/">
          Home
        </CustomLink>
        <CustomLink className="h-100 hover:bg-gray-300" to="/about">
          About
        </CustomLink>
        <CustomLink className="hover:bg-gray-300" to="/contact">
          Contact
        </CustomLink>
      </ul>
      {/*hamburger*/}
      <div
        onClick={handleClick}
        className="md:hidden z-10"
        style={{ fontSize: "2rem" }}
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*mobile menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "fixed top-0 left-0 w-full h-screen bg-black object-cover roddenberry flex flex-col justify-center items-center"
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
}

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path: resolvedPath.pathname, end: true});

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar