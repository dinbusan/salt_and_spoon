import React from "react";
import {FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="z-20 sticky top-[100vh] text-center bg-neutral-900 text-neutral-100 p-5 tracking-wider text-xs font-thasadith">
      <div>
        <p className="leading-4">
          Salt & Spoon CT
          <br />
          <Link className="md:hidden" to="tel:8603840553">
            (860) 384-0553
          </Link>
          <span className="hidden md:inline">(860) 384-0553</span>
          , Southington, CT
          <br />
          2023 Salt & Spoon CT
          <br />
          Follow us at:
        </p>
        <div className="justify-center pt-1 flex text-lg ">
          <a href="https://www.instagram.com/saltandspoonct/">
            <FaInstagram className="mx-1 hover:text-neutral-400 duration-300" />
          </a>
          <a href="https://www.facebook.com/saltandspoonct">
            <FaFacebook className="mx-1 hover:text-neutral-400 duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
