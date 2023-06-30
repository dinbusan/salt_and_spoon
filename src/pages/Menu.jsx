import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Cake from "/assets/tropical_cake.jpeg";
import Cupcakes from "/assets/cupcake_flowers.jpeg";
import Pie from "/assets/apple_pie.jpeg";
import Cheesecake from "/assets/berry_cheesecake.jpeg";
import Donuts from "/assets/donuts.jpeg";
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
      <div className="bg-sky-950 pb-5 text-blue-50 font-thasadith tracking-wider text-3xl md:text-4xl xl:text-5xl text-center">
        OUR MENU
        <hr className="w-10 h-0.5 mx-auto mt-4 mb-5 bg-sky-50 border-0" />
        <p className="text-sky-50 font-thasadith text-center mx-auto text-xl tracking-wider my-10 w-5/6 md:w-1/2">
          We are proud to offer a fully customizable menu. If you have an idea
          we can work together to make it happen! Below are some of my most
          popular menu items.
        </p>
      </div>
      <div className="md:grid md:grid-cols-2 xl:w-2/3 mx-auto">
        <div className="md:order-1 md:my-auto font-thasadith tracking-wider text-xl text-center p-5">
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
              className="mt-4 mx-auto p-2 rounded-md w-1/2 self-center bg-blue-950 font-thasadith text-lg text-blue-50 hover:bg-sky-800 duration-300"
              type="button"
            >
              Cakes and flavors
            </button>
          </Link>
        </div>
        <img src={Cake} className={" md:order-2 aspect-square"} />
        {/* <img className="-z-1 md:order-2 aspect-square " src={Cake} alt="" /> */}
        <div className="md:order-4 z-20 justify-center flex flex-col  bg-sky-50 h-full font-thasadith tracking-wider text-xl text-center p-5">
          <p className="font-bold">CUPCAKES</p>
          <hr className="w-10 h-0.5 mx-auto mt-2 mb-5 bg-gray-900 border-0" />
          <p className="">
            Cupcake flower baskets, centerpieces, and boards available as well!
          </p>
        </div>
        <img className={"md:order-3"} src={Cupcakes} alt="" />
        <div className="md:order-5 z-20 justify-center flex flex-col  bg-sky-50 h-full font-thasadith tracking-wider text-xl text-center p-5">
          <p className="font-bold">PIES</p>
          <hr className="w-10 h-0.5 mx-auto mt-2 mb-5 bg-gray-900 border-0" />
          <p>
            Most popular flavors include Salted Apple Caramel (pictured),
            Option2, Option3
          </p>
        </div>
        <img className={"md:order-6 "} src={Pie} alt="" />
        <div className="md:order-8 z-20 justify-center flex flex-col  bg-sky-50 h-full font-thasadith tracking-wider text-xl text-center p-5">
          <p className="font-bold">CHEESECAKE</p>
          <hr className="w-10 h-0.5 mx-auto mt-2 mb-5 bg-gray-900 border-0" />
          <p>
            Traditional New York style cheese cake - 8” or 9”
            <br />
            50$
          </p>
        </div>
        <img className={"md:order-7"} src={Cheesecake} alt="" />
        <div className="md:order-9 z-20 justify-center flex flex-col bg-sky-50 h-full font-thasadith tracking-wider text-xl text-center p-5">
          <p className="font-bold">DONUTS</p>
          <hr className="w-10 h-0.5 mx-auto mt-2 mb-5 bg-gray-900 border-0" />
          <p>Italian style cream filled donuts</p>
        </div>
        <img className="md:order-10" src={Donuts} alt="" />
      </div>
    </motion.div>
  );
};

// function ImgSection({ src, classNames }) {
//   const isScreenMdOrLarger = useMediaQuery({ minWidth: 768 });
//   const hasScroll = isScreenMdOrLarger;

//   let ref = useRef(null);
//   let { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });
//   let y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

//   let imgElement;
//   if (hasScroll) {
//     imgElement = (
//       <motion.img
//         ref={ref}
//         className={classNames}
//         style={{ y }}
//         src={src}
//         alt=""
//       />
//     );
//   } else {
//     imgElement = (
//       <motion.img ref={ref} className={classNames} src={src} alt="" />
//     );
//   }

//   return imgElement;
// }

// function ImgSection({ src, classNames }) {
//   let ref = useRef(null);
//   let { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["end end", "end start"],
//   });
//   let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
//   return (
//     <motion.img
//       ref={ref}
//     className={classNames}
//       style={{ y }}
//       src={src}
//       alt=""
//     />
//   );
// }

// function TextSection({ children, classNames }) {
//   let ref = useRef(null);
//   let { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["end end", "end start"],
//   });
//   let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
//   return (
//     <motion.div ref={ref} style={{ y }} className={classNames}>
//       {children}
//     </motion.div>
//   );
// }

export default Menu;
