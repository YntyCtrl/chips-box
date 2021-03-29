import PizzaPreview from "./PizzaPreview/PizzaPreview";
import PizzaControls from "./PizzaControls/PizzaControls";

import classes from "./PizzaBuilder.module.css";
import { useState } from "react";

const PizzaBuilder = () => {
  const [ingredients, setIngredients] = useState({
    tomato: 0,
    salami: 0,
    greenOlive: 0,
    blackOlive: 0,
    redPepper: 0,
    yellowPepper: 0,
  });

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    const newIngredients = { ...ingredients };
    
    newIngredients[type]--;
    setIngredients(newIngredients);
  }

  return (
    <div className={classes.PizzaBuilder}>
      <PizzaPreview ingredients={ingredients} />
      <PizzaControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        />
    </div>
  );
}

export default PizzaBuilder;