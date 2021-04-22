import React from "react";
import classes from "./PizzaIngredient.module.css";

import BekonBackground from "../../../image/Bekon.png";
import Barbecue from "../../../image/Barbecue.png";
import СrabBackground from "../../../image/Crab.png";
import Hickory from "../../../image/Hickory.png";
import Classic from "../../../image/Classic.png";
import Onion from "../../../image/Onion.png";
const PizzaIngredient = ({ type, fixed }) => {
  const types = {
    Bekon: {
      backgroundImage: `url(${BekonBackground})`,
      width: "50px",
      height: "60px",
    },
    Barbecue: {
      backgroundImage: `url(${Barbecue})`,
      width: "50px",
      height: "60px",
    },
    Crab: {
      backgroundImage: `url(${СrabBackground})`,
      width: "50px",
      height: "60px",
    },
    Hickory: {
      backgroundImage: `url(${Hickory})`,
      width: "50px",
      height: "60px",
    },
    Classic: {
      backgroundImage: `url(${Classic})`,
      width: "50px",
      height: "60px",
    },
    Onion: {
      backgroundImage: `url(${Onion})`,
      width: "50px",
      height: "60px",
    },
  };

  // function getPosition(ingredientWidth) {
  //   // const pizzaDiameter = 380;
  //   // const pizzaRadius = pizzaDiameter / 2;
  //   // const ingredientRadius = parseInt(ingredientWidth) / 2;

  //   // const ingredientTop = Math.round(Math.random() * pizzaDiameter);
  //   // const ingredientLeft = Math.round(Math.random() * pizzaDiameter);

  //   const distance = Math.sqrt(
  //     Math.pow(ingredientTop - pizzaRadius, 2) + Math.pow(ingredientLeft - pizzaRadius, 2)
  //   ) + ingredientRadius;

  //   return distance < pizzaRadius
  //     ? {
  //       top: ingredientTop - ingredientRadius,
  //       left: ingredientLeft - ingredientRadius
  //     }
  //     : getPosition(ingredientWidth);
  // }

  // Get random position for this ingredient.
  // if (!fixed) {
  //   const position = getPosition(types[type].width);
  //   types[type].top = position.top + "px";
  //   types[type].left = position.left + "px";
  // }
  // Get random rotation for this ingredient.
  // types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.PizzaIngredient} style={types[type]}></div>
  );
}

export default React.memo(PizzaIngredient);