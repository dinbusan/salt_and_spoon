import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Cake from "/assets/tropical_cake.jpeg";
import Cupcakes from "/assets/cupcake_flowers.jpeg";
import Pie from "/assets/apple_pie.jpeg";
import Cheesecake from "/assets/berry_cheesecake.jpeg";
import Donuts from "/assets/donuts.jpeg";
import Cookies from "/assets/cookies.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="bg-neutral-900 pt-16 pb-10 text-neutral-100 font-thasadith tracking-wider text-3xl md:text-4xl xl:text-5xl text-center">
        OUR MENU
        <hr className="w-10 h-0.5 mx-auto mt-4 mb-5 bg-neutral-100 border-0" />
        <p className="text-neutral-100 font-thasadith text-center mx-auto text-xl tracking-wider my-10 w-5/6 md:w-1/2">
          We are proud to offer a fully customizable menu. If you have an idea
          we can work together to make it happen! Below are some of my most
          popular menu items.
        </p>
        <div className="md:flex justify-center ">
          <Link to="/assets/salt_spoon_menu.pdf" target="_blank" download>
            <button className="block text-sm mt-5 xl:mt-1 tracking-widest font-thasadith uppercase mx-auto md:mx-5 shadow border-neutral-100 border hover:bg-neutral-400 hover:text-neutral-100 duration-300 focus:shadow-outline focus:outline-none text-neutral-100 py-3 px-6 rounded">
              Download Menu
            </button>{" "}
          </Link>
          <Link to="/contact">
            <button className="block text-sm mt-5 xl:mt-1 tracking-widest font-thasadith uppercase mx-auto shadow border-neutral-100 border hover:bg-neutral-400 hover:text-neutral-100 duration-300 focus:shadow-outline focus:outline-none text-neutral-100 py-3 px-10 rounded">
              Contact Me
            </button>{" "}
          </Link>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 xl:w-2/3 mx-auto">
        <div className="md:order-1 justify-center flex flex-col  bg-neutral-50 h-full font-thasadith tracking-wider text-xl text-center p-5">
          <p className="font-bold">DECORATED CAKES</p>
          <hr className="w-10 h-0.5 mx-auto mt-2 mb-5 bg-gray-900 border-0" />
          <p>
            Cakes are available in 6”, 8” and 10”.
            <br />
            Various Size sheet cakes available upon request.
            <br />
            <br /> Cakes can be decorated and customized to your liking. Tiered
            wedding cakes, birthday cakes, and character cakes are all options!
          </p>
          <Link to="/cakes">
            <button
              className="mt-4 mx-auto p-2 rounded-md w-1/2 self-center bg-neutral-900 font-thasadith text-lg text-neutral-100 hover:bg-neutral-600 duration-300"
              type="button"
            >
              CAKE MENU
            </button>
          </Link>
        </div>
        <img src={Cake} className={" md:order-2 aspect-square"} />
        {/* <img className="-z-1 md:order-2 aspect-square " src={Cake} alt="" /> */}
        <div className="md:order-4 z-20 justify-center flex flex-col  bg-neutral-50 h-full font-thasadith tracking-wider text-xl text-center p-5">
          <p className="font-bold">CUPCAKES</p>
          <hr className="w-10 h-0.5 mx-auto mt-2 mb-5 bg-gray-900 border-0" />
          <p className="">
            Cupcake flower baskets, centerpieces, and boards available as well!
            <br />
            Traditional flavor cupcakes with buttercream frosting - $2.75 ea{" "}
            <br />
            Specialty flavors -$3.00/ ea
          </p>
        </div>
        <img className={"md:order-3"} src={Cupcakes} alt="" />
        <div className="md:order-5 z-20 justify-center flex flex-col  bg-neutral-50 h-full font-thasadith tracking-wider text-xl text-center p-5">
          <p className="font-bold">PIES</p>
          <hr className="w-10 h-0.5 mx-auto mt-2 mb-5 bg-gray-900 border-0" />
          <p>
            Explore our tasty pie options, baked daily using only the finest
            ingredients. Pictured is Salted Apple Caramel.
          </p>
        </div>
        <img className={"md:order-6 "} src={Pie} alt="" />
        <div className="md:order-8 z-20 justify-center flex flex-col  bg-neutral-50 h-full font-thasadith tracking-wider text-xl text-center p-5">
          <p className="font-bold">CHEESECAKE</p>
          <hr className="w-10 h-0.5 mx-auto mt-2 mb-5 bg-gray-900 border-0" />
          <p>
            Traditional New York style cheese cake - 8” or 9”
            <br />
            50$
          </p>
        </div>
        <img className={"md:order-7"} src={Cheesecake} alt="" />
        <div className="md:order-9 z-20 justify-center flex flex-col bg-neutral-50 h-full font-thasadith tracking-wider text-xl text-center p-5">
          <p className="font-bold">DONUTS</p>
          <hr className="w-10 h-0.5 mx-auto mt-2 mb-5 bg-gray-900 border-0" />
          <p>Italian style cream filled donuts</p>
        </div>
        <img className="md:order-10" src={Donuts} alt="" />
        <div className="md:order-12 z-20 justify-center flex flex-col bg-neutral-50 h-full font-thasadith tracking-wider text-xl text-center p-5">
          <p className="font-bold">COOKIES</p>
          <hr className="w-10 h-0.5 mx-auto mt-2 mb-5 bg-gray-900 border-0" />
          <p>Assorted cookie trays - $ 11.99/lb</p>
        </div>
        <img className="md:order-11" src={Cookies} alt="" />
      </div>
    </motion.div>
  );
};

export default Menu;
