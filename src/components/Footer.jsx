import React from "react";
import {FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bottom-0 w-screen text-center bg-blue-950 text-sky-50 mt-10 p-5 tracking-wider font-thasadith">
      <div>
        <p className="">Salt & Spoon CT</p>
        <p>Salt & Spoon is a local purveyor of delicious sweets and treats.</p>
        <p>2023 Salt & Spoon CT</p>
        <div className="flex justify-center items-center">
          <p>Follow us at:</p>
          <a href="https://www.instagram.com/p/CF0gMAoHiMk/">
            <FaInstagram className="ml-2" />
          </a>
          <a href="https://www.facebook.com/saltandspoonct">
            <FaFacebook className="ml-2" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
