import React from "react";
import { motion } from "framer-motion";
import Welcome from "../assets/welcome-img.jpeg"

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-5"
    >
      <div className="bg-sky-950 w-full text-blue-50 text-center font-thasadith tracking-wider text-3xl py-16 -mt-1">
        OUR STORY
      </div>
      <div className="md:grid md:grid-cols-2 xl:grid-cols-4 md:my-10 md:mr-5 bg-gray-50">
        <img
          className="aspect-square md:aspect-auto md:order-2  object-cover object-top"
          src={Welcome}
          alt=""
        />
        <div className="mx-5 my-auto xl:col-start-2">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas,
            neque ad. Doloremque voluptatibus recusandae magnam sapiente sed,
            velit ratione, iste ipsum, maxime perspiciatis adipisci voluptas!
            Iusto accusantium, ullam laboriosam quibusdam nobis sapiente quo.
            Ratione eius quod minima quis ut, vitae, quas inventore iste velit
            nam enim illum eveniet laborum. Placeat optio architecto nemo
            voluptatum consequuntur eum quae quasi corrupti ut nisi! Excepturi
            laudantium iste dignissimos vitae molestiae ab ut, harum quod sed
            quo quam, quis incidunt atque unde, sapiente culpa assumenda dolore
            nemo? Hic ipsam facere, cupiditate dicta, dolor a ea non, et placeat
            molestiae quae sed officiis sapiente aut!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
