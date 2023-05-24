import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-cupcakes w-screen bg-fixed bg-no-repeat bg-cover bg-center">
        <div className="img-container  w-3/4 sm:w-2/3 md:w-2/5 lg:w-2/3 xl:w-2/5 mx-auto">
          <img className="logo" src="./assets/invert.png" alt="" />
        </div>
      </div>
      <div className="w-5/6 my-5 md:my-10 mx-auto grid grid-cols-1 md:grid-cols-5 bg-white">
        <p className="md:col-span-3 py-5 px-2 xl:px-36 md:py-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Facilis, optio. Praesentium amet excepturi officia quis atque sapiente
          ea animi nulla? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ex esse a earum iusto molestias harum, suscipit odit error
          asperiores mollitia ipsam modi commodi repellendus omnis sed assumenda
          voluptate architecto odio eum! Recusandae quos et delectus aut,
          deserunt accusantium adipisci aperiam enim laboriosam aliquam rem
          repellat architecto assumenda itaque explicabo perferendis magnam
          culpa consectetur iure, animi eius nemo porro molestiae maxime.
        </p>
        <div className="welcome-image md:col-span-2 flex">
          <img src="./assets/welcome-img.jpeg" alt="" className="object-cover" />
        </div>
      </div>
      <div className="img-container w-screen grid grid-cols-2 md:grid-cols-5 gap-0">
        <div className="aspect-square card-zoom">
          <img
            src="./assets/img1.jpeg"
            alt=""
            className="card-zoom-image object-cover object-center w-full h-full "
          />
        </div>
        <div className="aspect-square card-zoom">
          <img
            src="./assets/img2.jpeg"
            alt=""
            className="card-zoom-image object-cover object-center w-full h-full"
          />
        </div>
        <div className="aspect-square card-zoom">
          <img
            src="./assets/img3.jpeg"
            alt=""
            className="card-zoom-image object-cover object-center w-full h-full"
          />
        </div>
        <div className="aspect-square card-zoom">
          <img
            src="./assets/img4.jpeg"
            alt=""
            className="card-zoom-image object-cover object-center w-full h-full"
          />
        </div>
        <div className="aspect-square card-zoom">
          <img
            src="./assets/img5.jpeg"
            alt=""
            className="card-zoom-image object-cover object-center w-full h-full"
          />
        </div>
        <div className="aspect-square card-zoom">
          <img
            src="./assets/img6.jpeg"
            alt=""
            className="card-zoom-image object-cover object-center w-full h-full"
          />
        </div>
        <div className="aspect-square card-zoom">
          <img
            src="./assets/img7.jpeg"
            alt=""
            className="card-zoom-image object-cover object-center w-full h-full"
          />
        </div>
        <div className="aspect-square card-zoom">
          <img
            src="./assets/img8.jpeg"
            alt=""
            className="card-zoom-image object-cover object-center w-full h-full"
          />
        </div>
        <div className="aspect-square card-zoom">
          <img
            src="./assets/img9.jpeg"
            alt=""
            className="card-zoom-image object-cover object-center w-full h-full"
          />
        </div>
        <div className="aspect-square card-zoom">
          <img
            src="./assets/img10.jpeg"
            alt=""
            className="card-zoom-image object-cover object-center w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
