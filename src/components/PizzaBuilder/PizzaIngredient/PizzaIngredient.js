import React from "react";
import classes from "./PizzaIngredient.module.css";


const PizzaIngredient = ({ type, fixed }) => {
  const types = {
    salami: { backgroundColor: `#43d11f`, width: "35px", height: "35px" },
    tomato: { backgroundColor: `#1fd196`, width: "35px", height: "35px" },
    blackOlive: { backgroundColor: `#1f81d1`, width: "10px", height: "10px" },
    greenOlive: { backgroundColor: `#2b1fd1`, width: "10px", height: "10px" },
    redPepper: { backgroundColor: `#bc1fd1`, width: "20px", height: "20px" },
    yellowPepper: { backgroundColor: `#dd0303`, width: "40px", height: "40px" },
  };

  function getPosition(ingredientWidth) {
    const pizzaDiameter = 380;
    const pizzaRadius = pizzaDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * pizzaDiameter);
    const ingredientLeft = Math.round(Math.random() * pizzaDiameter);

    const distance = Math.sqrt(
      Math.pow(ingredientTop - pizzaRadius, 2) + Math.pow(ingredientLeft - pizzaRadius, 2)
    ) + ingredientRadius;

    return distance < pizzaRadius
      ? {
        top: ingredientTop - ingredientRadius,
        left: ingredientLeft - ingredientRadius
      }
      : getPosition(ingredientWidth);
  }

  // Get random position for this ingredient.
  if (!fixed) {
    const position = getPosition(types[type].width);
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
  }
  // Get random rotation for this ingredient.
  types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.PizzaIngredient} style={types[type]}></div>
  );
}

export default React.memo(PizzaIngredient);