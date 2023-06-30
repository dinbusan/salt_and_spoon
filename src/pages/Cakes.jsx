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
        className="pb-5 font-thasadith"
      >
        <div className="bg-sky-950 w-full text-blue-50 text-center font-thasadith tracking-wider text-3xl md:text-4xl xl:text-5xl py-16 -mt-1">
          CAKES
        </div>
        <div>
          Frosting- cream cheese and buttercream
          <br />
          Fillings- buttercream, cream cheese, mousse and fruit available
          <br />
          6” cake- $25
          <br />
          8” cake- serves up to 20 - $45
          <br />
          9” cake- serves up to 24- $ 50
          <br />
          10” cake- serves up to 28- $ 55
          <br />
          Tiered cakes and sheet cake also available
          <br />
          Specialty designs - added cost accordingly
        </div>
        <div>
          <h1>Flavors</h1>
          PBDC Our Rock Star Our signature dark chocolate cake with peanut
          butter, cream filling & buttercream frosting Lemon Razzy White vanilla
          cake, lemon curd filling & raspberry buttercream frosting. Light with
          a pop of razz! Mom’s Tiramisu Coffee-flavored white cake with
          mascarpone coffee filling & buttercream frosting Toasted Almond Crunch
          White vanilla cake with almond buttercream filling & vanilla crunch
          topping. It’ll take you back to the ice cream truck! Midnight Mint
          Chip Rich dark chocolate chip cake with mint mousse filling, topped
          with buttercream frosting. Fresh and decadent. Cookies and Cream
          Chocolate cake with cookie crumble filling & vanilla buttercream
          frosting.Gimme Smores Our signature dark chocolate cake with a layer
          of graham cracker crumbs, chocolate bar filling & toasted meringue
          frosting. No camp fires needed! Blueberry Bliss White cake with fresh
          blueberries, mascarpone filling & buttercream frosting Not your
          Mother’s Carrot Cake Spiced cake with coconut, raisins, pineapple &
          cream cheese topped with buttercream frosting Coffee Crunch Dark
          chocolate cake with decadent chocolate fudge, dipped in toffee pieces
          with fresh whipped cream Strawberries & Champagne White champagne
          laced cake with strawberry cream filling & whipped cream topping.
          Perfect for any occasion! Blackberry Dream Chocolate cake with
          mascarpone filling, blackberry buttercream frosting & fresh
          blackberries Nonna’s Cannoli White cake with mascarpone & cream cheese
          filling with fresh whipped cream frosting Birthday Bombs White cake
          with colored shots & vanilla buttercream frosting. Perfect for kids &
          adults! Breakfast for Dessert Warm spice cake with bacon, maple
          filling & maple butter- cream frosting topped with candied bacon.
        </div>
      </motion.div>
    </div>
  );
};

export default Cakes;
