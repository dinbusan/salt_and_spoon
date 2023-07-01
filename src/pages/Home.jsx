import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "/assets/invert.png";
import Connecticut from "/assets/connecticut.png";
import { Link } from "react-router-dom";
import Rose from "/assets/rose_cake.jpeg";
import Follow from "/assets/follow_me.png";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className=""
    >
      <Section
        backGround="bg-bluecake"
        src={Logo}
        classNames="w-3/4 sm:w-2/3 md:w-2/5 lg:w-2/3 xl:w-2/5 py-2 xl:py-5 mx-auto"
      />
      <div className="z-1 relative w-screen bg-neutral-100 pt-5">
        <div className=" w-5/6 my-5 md:my-6 mx-auto grid grid-cols-1 md:grid-cols-5 bg-white">
          <div className="md:col-span-3 py-5 md:pt-10 xl:pt-10">
            <h1 className="font-shadows tracking-wider text-4xl xl:text-6xl text-center justify-center flex py-5 md:py-10">
              Welcome to <br className="lg:hidden" /> Salt & Spoon!
            </h1>
            <p className="tracking-wider font-thasadith text-xl  px-2 pb-2 xl:px-24 xl:py-10 text-center">
              We are a local Connecticut bakery offering cakes, cupcakes, pies,
              cookies, and other customizable sweets! Contact us here, on
              instagram, or facebook, or call at <br />
              <Link className="md:hidden" to="tel:8603840553">
                <em>(860) 384-0553</em>
              </Link>
              <span className="hidden md:inline">
                <em>(860) 384-0553</em>
              </span>
            </p>
            <Link to="/contact">
              <button className="block text-sm mt-5 xl:mt-1 tracking-widest font-thasadith uppercase mx-auto shadow border-neutral-900 border hover:bg-neutral-900 hover:text-neutral-100 duration-300 focus:shadow-outline focus:outline-none text-neutral-900 py-3 px-10 rounded">
                Contact Us
              </button>{" "}
            </Link>
          </div>
          <div className="welcome-image md:col-span-2 flex">
            <img src={Rose} alt="" className="object-cover" />
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-3 mx-auto justify-center">
        <p>Location</p>
        <p>Hours</p>
        <p>Contact</p>
      </div> */}
      <div className="bg-unicorn py-4 xl:pt-5 mx-auto bg-cover bg-center ">
        <p className="my-10 pb-10 font-thasadith tracking-wider text-neutral-9100  bg-neutral-100 bg-opacity-80 p-5 text-center text-xl">
          Serving the <br /> Southington, Connecticut area
          <br /> since 2017!
          <img className="w-12 my-10 mx-auto" src={Connecticut} />
          Currently available to book cakes, pies, pastries, and other treats!
        </p>
      </div>
      <div className="bg-neutral-100 z-20">
        <div className="flex justify-center my-16">
          <a href="https://www.instagram.com/saltandspoonct/">
            <img
              className="active:scale-75 md:hover:scale-75 h-24"
              src={Follow}
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="">
        <div className="bg-neutral-100  w-screen grid grid-cols-2 md:grid-cols-5">
          {/* <div className="z-20 text-center py-10 col-span-2 md:col-span-5 bg-sky-100 w-full font-shadows text-3xl">
            <div className="mx-auto h-24  ">
              <a href="https://www.instagram.com/saltandspoonct/">
                <img
                  className="active:scale-75 md:hover:scale-75 w-full h-full object-contain"
                  src={Follow}
                  alt=""
                />
              </a>
            </div>
          </div> */}

          <div className="aspect-square card-zoom">
            <img
              src="/assets/img1.jpeg"
              alt=""
              className="card-zoom-image object-cover object-center w-full h-full "
            />
          </div>
          <div className="aspect-square card-zoom">
            <img
              src="/assets/img2.jpeg"
              alt=""
              className="card-zoom-image object-cover object-center w-full h-full"
            />
          </div>
          <div className="aspect-square card-zoom">
            <img
              src="/assets/img3.jpeg"
              alt=""
              className="card-zoom-image object-cover object-center w-full h-full"
            />
          </div>
          <div className="aspect-square card-zoom">
            <img
              src="/assets/img4.jpeg"
              alt=""
              className="card-zoom-image object-cover object-center w-full h-full"
            />
          </div>
          <div className="aspect-square card-zoom">
            <img
              src="/assets/img5.jpeg"
              alt=""
              className="card-zoom-image object-cover object-center w-full h-full"
            />
          </div>
          <div className="aspect-square card-zoom">
            <img
              src="/assets/img6.jpeg"
              alt=""
              className="card-zoom-image object-cover object-center w-full h-full"
            />
          </div>
          <div className="aspect-square card-zoom">
            <img
              src="/assets/img7.jpeg"
              alt=""
              className="card-zoom-image object-cover object-center w-full h-full"
            />
          </div>
          <div className="aspect-square card-zoom">
            <img
              src="/assets/img8.jpeg"
              alt=""
              className="card-zoom-image object-cover object-center w-full h-full"
            />
          </div>
          <div className="aspect-square card-zoom">
            <img
              src="/assets/img9.jpeg"
              alt=""
              className="card-zoom-image object-cover object-center w-full h-full"
            />
          </div>
          <div className="aspect-square card-zoom">
            <img
              src="/assets/img10.jpeg"
              alt=""
              className="card-zoom-image object-cover object-center w-full h-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function Section({ backGround, src, classNames, children }) {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={ref}>
      <motion.div className="" style={{ y }}>
        <div className={`${backGround} bg-no-repeat bg-cover bg-center`}>
          <div className={`${classNames}`}>
            {src && <img className="logo" src={src} alt="" />}
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
