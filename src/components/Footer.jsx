import React from "react";
import {FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="z-20 sticky top-[100vh] text-center bg-sky-950 text-sky-50 p-5 tracking-wider text-xs font-thasadith">
      <div>
        <p className="leading-4">
          Salt & Spoon CT
          <br />
          <Link className="md:hidden" to="tel:8603840553">(860) 384-0553</Link>
          <span className="hidden md:inline">(860) 384-0553</span>
          , Southington, CT
          <br />
          2023 Salt & Spoon CT
          <br />
          Follow us at:
        </p>
        <div className="justify-center pt-1 flex text-lg ">
          <a href="https://www.instagram.com/p/CF0gMAoHiMk/">
            <FaInstagram className="mx-1 hover:text-blue-400 duration-300" />
          </a>
          <a href="https://www.facebook.com/saltandspoonct">
            <FaFacebook className="mx-1 hover:text-blue-400 duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
