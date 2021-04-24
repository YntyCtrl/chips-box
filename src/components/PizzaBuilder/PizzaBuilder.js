import PizzaPreview from "./PizzaPreview/PizzaPreview";
import PizzaControls from "./PizzaControls/PizzaControls";
import axios from "axios";
import classes from "./PizzaBuilder.module.css";
import { useEffect, useState } from "react";

import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";

const PizzaBuilder = ({ history }) => {
  const prices = {
    Bekon: 45,
    Barbecue: 34,
    Crab: 30,
    Hickory: 46,
    Classic: 37,
    Onion: 40,
  };
  const [ingredients, setIngredients] = useState({});

  const [ordering, setOrdering] = useState(false);
  const [price, setPrice] = useState(0);

  useEffect(loadDefaults, []);

  function loadDefaults() {
    axios
      .get("https://chips-box-default-rtdb.firebaseio.com/default.json")
      .then((response) => {
        setPrice(response.data.price);

        // For arrays
        // setIngredients(Object.values(response.data.ingredients));
        // For objects
        setIngredients(response.data.box);
      });
  }

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
  function finishOrdering() {
    axios
      .post("https://chips-box-default-rtdb.firebaseio.com/orders.json", {
        ingredients: ingredients,
        price: price,
        address: "1234 Jusaeva str",
        phone: "0 777 777 777",
        name: "Sadyr Japarov",
      })
      .then(() => {
        setOrdering(false);
        loadDefaults();
        history.push("/checkout");
      });
  }
  return (
    <div className={classes.PizzaBuilder}>
      <PizzaPreview ingredients={ingredients} price={price} />
      <PizzaControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        startOrdering={startOrdering}
      />
      <Modal show={ordering} cancel={stopOrdering}>
        <OrderSummary ingredients={ingredients} price={price} />
        <Button onClick={finishOrdering} green>
          Checkout
        </Button>
        <Button onClick={stopOrdering}>Cancel</Button>
      </Modal>
    </div>
  );
}

export default PizzaBuilder;