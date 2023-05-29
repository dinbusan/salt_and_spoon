import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "/assets/invert.png";
import Welcome from "/assets/welcome-img.jpeg";
import Connecticut from "/assets/connecticut.png"
import { Link } from "react-router-dom";
import Rose from "/assets/rose_cake.png"

const Home = () => {
  // let ref = useRef(null);
  // let { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end start"]
  // });
  // let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* <div ref={ref}>
        <motion.div className=" relative" style={{ y }}>
          <div className="bg-bluecake w-screen bg-fixed bg-no-repeat bg-cover bg-center">
            <div className="img-container w-3/4 sm:w-2/3 md:w-2/5 lg:w-2/3 xl:w-2/5 py-2 xl:py-5 mx-auto">
              <img className="logo" src={Logo} alt="" />
            </div>
          </div>
        </motion.div>
      </div> */}
      <Section
        backGround="bg-bluecake"
        src={Logo}
        classNames="img-container w-3/4 sm:w-2/3 md:w-2/5 lg:w-2/3 xl:w-2/5 py-2 xl:py-5 mx-auto"
      />
      <div className="z-1 relative w-screen bg-blue-50 py-5">
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
              <button className="block text-sm mt-5 xl:mt-1 tracking-widest font-thasadith uppercase mx-auto shadow bg-blue-950 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white py-3 px-10 rounded">
                Contact Us
              </button>{" "}
            </Link>
          </div>
          <div className="welcome-image md:col-span-2 flex">
            <img src={Rose} alt="" className="object-cover" />
          </div>
        </div>
      </div>
      <Section
        backGround="bg-unicorn"
        classNames="img-container w-3/4 sm:w-2/3 md:w-2/5 lg:w-3/4 xl:w-2/5 py-4 xl:py-5 mx-auto"
      >
        <p className="my-10 font-thasadith tracking-wider bg-sky-50 bg-opacity-70 p-5 text-center text-xl">
          Serving the <br /> Southington, Connecticut area
          <br /> since 2017!
          <img className="w-12 my-10 mx-auto" src={Connecticut} />
          Currently available to book cakes, pies, pastries, or other
          customizable sweets!
          <br />
          <br />
          Please contact us to place your order.
        </p>
      </Section>
      <div className="">
        <div className="bg-sky-50 mt-10 img-container gap-1 px-2 md:px-0 w-screen grid grid-cols-2 md:grid-cols-5 md:gap-0">
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
        <div
          className={`${backGround} w-screen bg-fixed bg-no-repeat bg-cover bg-center`}
        >
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
