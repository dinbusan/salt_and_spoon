import React from "react";
import {FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="sticky top-[100vh] text-center bg-blue-950 text-sky-50 p-5 tracking-wider text-xs font-thasadith">
      <div>
        <p className="leading-4">
          Salt & Spoon CT
          <br />
          Salt & Spoon is a local purveyor of delicious sweets and treats.
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
