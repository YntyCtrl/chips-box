import PizzaPreview from "./PizzaPreview/PizzaPreview";
import PizzaControls from "./PizzaControls/PizzaControls";

import classes from "./PizzaBuilder.module.css";
import { useState } from "react";

import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";

const PizzaBuilder = () => {
  const prices = {
    tomato: 3.5,
    salami: 4,
    greenOlive: 0.3,
    blackOlive: 0.3,
    redPepper: 2,
    yellowPepper: 1,
  };
  const [ingredients, setIngredients] = useState({
    Bekon: 0,
    Barbecue: 0,
    Crab: 0,
    Hickory: 0,
    Classic: 0,
    Onion: 0,
  });

  const [ordering, setOrdering] = useState(false);
  const [price, setPrice] = useState(150);

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setPrice(price + prices[type]);
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    if (ingredients[type]) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setPrice(price - prices[type]);
      setIngredients(newIngredients);
    }
  }

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  return (
    <div className={classes.PizzaBuilder}>
      <PizzaPreview ingredients={ingredients} />
      <PizzaControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        startOrdering={startOrdering}
      />
      <Modal show={ordering} cancel={stopOrdering}>
        <OrderSummary ingredients={ingredients} price={price} />
        <Button  green>
          Checkout
        </Button>
        <Button onClick={stopOrdering}>Cancel</Button>
      </Modal>
    </div>
  );
}

export default PizzaBuilder;