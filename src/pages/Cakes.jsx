import React from "react";
import { motion } from "framer-motion";

const Cakes = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pb-5 font-thasadith lg:text-lg xl:text-xl"
      >
        <div className="bg-sky-950 text-blue-50 text-center font-thasadith tracking-wider text-3xl md:text-4xl xl:text-5xl py-16 -mt-1">
          CAKES
        </div>
        <div className="list text-center mx-10">
          <div className="md:flex justify-center">
            <div className="sizes mx-10 lg:mx-16 xl:mx-20">
              <h1 className="font-bold text-xl lg:text-2xl underline underline-offset-4 py-5">
                Sizes
              </h1>
              <ul className="space-y-2">
                <li>6” cake - $25</li>
                <li>
                  8” cake - <span className="lg:text-sm">serves up to 20</span>{" "}
                  - $45
                </li>
                <li>
                  9” cake - <span className="lg:text-sm">serves up to 24</span>{" "}
                  - $ 50
                </li>
                <li>
                  10” cake -<span className="lg:text-sm"> serves up to 28</span>{" "}
                  - $ 55
                </li>
              </ul>
            </div>
            <div className="frosting mx-10 lg:mx-16 xl:mx-20">
              <h1 className="font-bold text-xl lg:text-2xl underline underline-offset-4 py-5">
                Frosting
              </h1>
              <ul className="space-y-2">
                <li>cream cheese</li>
                <li>buttercream</li>
              </ul>
            </div>
            <div className="fillings mx-10 lg:mx-16 xl:mx-20">
              <h1 className="font-bold text-xl lg:text-2xl underline underline-offset-4 py-5">
                Fillings
              </h1>
              <ul className="space-y-2">
                <li>buttercream</li>
                <li>cream cheese</li>
                <li>mousse</li>
                <li>fruit</li>
              </ul>
            </div>
          </div>
          <div className="notes pt-10 justify-center flex">
            <p>
              Tiered cakes and sheet cake also available
              <br />
              Specialty designs - added cost accordingly
            </p>
          </div>
          <div>
            <div className="flavors">
              <h1 className="font-bold text-xl lg:text-2xl underline underline-offset-4 py-5">
                Flavors
              </h1>
              <ul className="space-y-2 md:text-left lg:mx-32 xl:mx-64">
                <li>
                  <span className="font-bold">PBDC (Our Rock Star) -</span> Our
                  signature dark chocolate cake with peanut butter, cream
                  filling & buttercream frosting
                </li>
                <li>
                  <span className="font-bold">Lemon Razzy -</span> White vanilla
                  cake, lemon curd filling & raspberry buttercream frosting.
                  Light with a pop of razz!
                </li>
                <li>
                  <span className="font-bold">Mom’s Tiramisu Coffee -</span>{" "}
                  flavored white cake with mascarpone coffee filling &
                  buttercream frosting
                </li>
                <li>
                  <span className="font-bold">Toasted Almond Crunch -</span>{" "}
                  White vanilla cake with almond buttercream filling & vanilla
                  crunch topping. It’ll take you back to the ice cream truck!
                </li>
                <li>
                  <span className="font-bold">Midnight Mint Chip -</span> Rich
                  dark chocolate chip cake with mint mousse filling, topped with
                  buttercream frosting. Fresh and decadent.
                </li>
                <li>
                  <span className="font-bold">Cookies and Cream -</span>{" "}
                  Chocolate cake with cookie crumble filling & vanilla
                  buttercream frosting
                </li>
                <li>
                  <span className="font-bold">Gimme Smores -</span> Our
                  signature dark chocolate cake with a layer of graham cracker
                  crumbs, chocolate bar filling & toasted meringue frosting. No
                  camp fires needed!{" "}
                </li>
                <li>
                  <span className="font-bold">Blueberry Bliss -</span> White
                  cake with fresh blueberries, mascarpone filling & buttercream
                  frosting{" "}
                </li>
                <li>
                  <span className="font-bold">
                    Not your Mother’s Carrot Cake -
                  </span>{" "}
                  Spiced cake with coconut, raisins, pineapple & cream cheese
                  topped with buttercream frosting{" "}
                </li>
                <li>
                  <span className="font-bold">Coffee Crunch -</span> Dark
                  chocolate cake with decadent chocolate fudge, dipped in toffee
                  pieces with fresh whipped cream{" "}
                </li>
                <li>
                  <span className="font-bold">Strawberries & Champagne -</span>{" "}
                  White champagne laced cake with strawberry cream filling &
                  whipped cream topping. Perfect for any occasion!
                </li>
                <li>
                  <span className="font-bold">Blackberry Dream -</span>{" "}
                  Chocolate cake with mascarpone filling, blackberry buttercream
                  frosting & fresh blackberries{" "}
                </li>
                <li>
                  <span className="font-bold">Nonna’s Cannoli -</span> White
                  cake with mascarpone & cream cheese filling with fresh whipped
                  cream frosting{" "}
                </li>
                <li>
                  <span className="font-bold">Birthday Bombs -</span> White cake
                  with colored shots & vanilla buttercream frosting. Perfect for
                  kids & adults!
                </li>
                <li>
                  <span className="font-bold">Breakfast for Dessert -</span>{" "}
                  Warm spice cake with bacon, maple filling & maple buttercream
                  frosting topped with candied bacon.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Cakes;
