import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Cake from "/assets/tropical_cake.png";
import Cupcakes from "/assets/cupcake_flowers.png";
import Pie from "/assets/apple_pie.png";
import Cheesecake from "/assets/berry_cheesecake.png";
import Donuts from "/assets/donuts.png";

const Menu = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="bg-sky-950 pb-5 text-blue-50 font-thasadith tracking-wider text-3xl text-center">
        OUR MENU
      </div>
      <p className="bg-sky-50 font-thasadith text-center mx-auto text-xl tracking-wider my-10 w-1/3">
        We are proud to offer a fully customizable menu. If you have an idea we
        can work together to make it happen! Below are some of my most popular
        menu items.
      </p>
      <div className="md:grid md:grid-cols-2 xl:mx-10">
        <div className="md:order-1 md:my-auto font-thasadith tracking-wider text-xl text-center p-5">
          <p className="">DECORATED CAKES</p>
          <hr className="w-10 h-0.5 mx-auto mt-2 mb-5 bg-gray-900 border-0" />
          <p>
            Cakes can be decorated and customized to your liking. Tiered wedding
            cakes, birthday cakes, and character cakes are all options! The most
            popular flavors are option1, option2, and option3.
          </p>
        </div>
        <ImgSection src={Cake} classNames={" md:order-2 aspect-square"} />
        {/* <img className="-z-1 md:order-2 aspect-square " src={Cake} alt="" /> */}
        <div className="md:order-4 z-20 justify-center flex flex-col  bg-sky-50 h-full font-thasadith tracking-wider text-xl text-center p-5">
          <p className="">CUPCAKES</p>
          <hr className="w-10 h-0.5 mx-auto mt-2 mb-5 bg-gray-900 border-0" />
          <p className="">
            Cupcake flower baskets, centerpieces, and boards available as well!
          </p>
        </div>
        <ImgSection classNames={"md:order-3"} src={Cupcakes} alt="" />
        <div className="md:order-5 z-20 justify-center flex flex-col  bg-sky-50 h-full font-thasadith tracking-wider text-xl text-center p-5">
          <p className="">PIES</p>
          <hr className="w-10 h-0.5 mx-auto mt-2 mb-5 bg-gray-900 border-0" />
          <p>
            Most popular flavors include Salted Apple Caramel (pictured),
            Option2, Option3
          </p>
        </div>
        <ImgSection classNames={"md:order-6 "} src={Pie} alt="" />
        <div className="md:order-8 z-20 justify-center flex flex-col  bg-sky-50 h-full font-thasadith tracking-wider text-xl text-center p-5">
          <p className="">CHEESECAKE</p>
          <hr className="w-10 h-0.5 mx-auto mt-2 mb-5 bg-gray-900 border-0" />
          <p>New York style cheesecake</p>
        </div>
        <ImgSection classNames={"md:order-7"} src={Cheesecake} alt="" />
        <div className="md:order-9 z-20 justify-center flex flex-col bg-sky-50 h-full font-thasadith tracking-wider text-xl text-center p-5">
          <p className="">DONUTS</p>
          <hr className="w-10 h-0.5 mx-auto mt-2 mb-5 bg-gray-900 border-0" />
          <p>Italian style cream filled donuts</p>
        </div>
        <ImgSection classNames="md:order-10" src={Donuts} alt="" />
      </div>
    </motion.div>
  );
};

function ImgSection({ src, classNames }) {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <motion.img
      ref={ref}
    className={classNames}
      style={{ y }}
      src={src}
      alt=""
    />
  );
}

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
