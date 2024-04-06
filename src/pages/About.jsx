import React from "react";
import { motion } from "framer-motion";
import Welcome from "/assets/welcome-img 2.jpeg";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-5"
    >
      <div className="bg-neutral-900 w-full text-neutral-100 text-center font-thasadith tracking-wider text-3xl md:text-4xl xl:text-5xl pt-16 pb-10 -mt-1">
        MY STORY
      </div>
      <div className="md:grid md:grid-cols-2 xl:grid-cols-4 md:my-10 md:mr-5 bg-neutral-100">
        <img
          className="aspect-square md:aspect-auto md:order-2  object-cover object-top"
          src={Welcome}
          alt=""
        />
        <div className="mx-5 mt-10 md:mt-20 xl:col-start-2 font-thasadith">
          <p className="flex flex-col tracking-wider text-center">
            <span className="text-center text-xl tracking-widest font-bold">
              MEET GAIL
            </span>
          </p>
          <hr className="w-10 h-0.5 mx-auto mt-4 mb-7 bg-gray-900 border-0" />
          <p className="flex text-lg flex-col tracking-wider text-center">
            Salt and Spoon is run as a one woman show, by Gail Giannelli out of
            her home in Southington, Connecticut.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
