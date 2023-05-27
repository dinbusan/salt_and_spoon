import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "../assets/invert.png";
import Welcome from "../assets/welcome-img.jpeg";


const Home = () => {
  // let ref = useRef(null);
  // let { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end start"]
  // });
  // let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="relative">
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
      <div className="z-1 relative w-screen bg-blue-50">
        <div className=" w-5/6 my-5 md:my-10 mx-auto grid grid-cols-1 md:grid-cols-5 bg-white">
          <div className="md:col-span-3 py-5 md:pt-10 xl:pt-20">
            <h1 className="font-shadows text-4xl xl:text-6xl text-center justify-center flex py-5 md:py-10">
              Welcome to <br className="lg:hidden" /> Salt & Spoon!
            </h1>
            <p className="font-thasadith text-xl  px-2 pb-2 xl:px-24 text-center flex ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Facilis, optio. Praesentium amet excepturi officia quis
              atque sapiente ea animi nulla?
            </p>
          </div>
          <div className="welcome-image md:col-span-2 flex">
            <img src={Welcome} alt="" className="object-cover" />
          </div>
        </div>
      </div>
      <Section
        backGround="bg-unicorn"
        classNames="img-container w-3/4 sm:w-2/3 md:w-2/5 lg:w-3/4 xl:w-2/5 py-2 xl:py-5 mx-auto"
      >
        <p className="my-10 bg-sky-50 bg-opacity-50 p-10">
          <span>
            Located in Southington, Connecticut

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam eos tempore dolore, minima expedita, accusantium, eaque eligendi et itaque repellendus nulla esse fugiat quia architecto quisquam reprehenderit? Odit, sit adipisci. Doloremque, quaerat. Tenetur, adipisci. Eum quod voluptates nam ab fugiat facilis accusantium illum perferendis non quae similique, cumque earum asperiores reiciendis aspernatur! Praesentium minima, totam minus fugit sed nihil, hic numquam ullam iure quod maiores cupiditate inventore adipisci eaque ut est incidunt asperiores neque nobis? Exercitationem, aliquid. Possimus, nulla? Voluptate quaerat eaque dolorem, tempora accusamus magnam culpa doloremque ea veritatis, explicabo optio nam earum at dolores dicta iste debitis corrupti!
          </span>
          
        </p>
      </Section>
      <div className="">
        <div className="bg-sky-50 mt-10 img-container gap-1 px-2 md:px-0 w-screen grid grid-cols-2 md:grid-cols-5 md:gap-0">
          <div className="aspect-square card-zoom">
            <img
              src="src/assets/img1.jpeg"
              alt=""
              className="card-zoom-image object-cover object-center w-full h-full "
            />
          </div>
          <div className="aspect-square card-zoom">
            <img
              src="src/assets/img2.jpeg"
              alt=""
              className="card-zoom-image object-cover object-center w-full h-full"
            />
          </div>
          <div className="aspect-square card-zoom">
            <img
              src="src/assets/img3.jpeg"
              alt=""
              className="card-zoom-image object-cover object-center w-full h-full"
            />
          </div>
          <div className="aspect-square card-zoom">
            <img
              src="src/assets/img4.jpeg"
              alt=""
              className="card-zoom-image object-cover object-center w-full h-full"
            />
          </div>
          <div className="aspect-square card-zoom">
            <img
              src="src/assets/img5.jpeg"
              alt=""
              className="card-zoom-image object-cover object-center w-full h-full"
            />
          </div>
          <div className="aspect-square card-zoom">
            <img
              src="src/assets/img6.jpeg"
              alt=""
              className="card-zoom-image object-cover object-center w-full h-full"
            />
          </div>
          <div className="aspect-square card-zoom">
            <img
              src="src/assets/img7.jpeg"
              alt=""
              className="card-zoom-image object-cover object-center w-full h-full"
            />
          </div>
          <div className="aspect-square card-zoom">
            <img
              src="src/assets/img8.jpeg"
              alt=""
              className="card-zoom-image object-cover object-center w-full h-full"
            />
          </div>
          <div className="aspect-square card-zoom">
            <img
              src="src/assets/img9.jpeg"
              alt=""
              className="card-zoom-image object-cover object-center w-full h-full"
            />
          </div>
          <div className="aspect-square card-zoom">
            <img
              src="src/assets/img10.jpeg"
              alt=""
              className="card-zoom-image object-cover object-center w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
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
