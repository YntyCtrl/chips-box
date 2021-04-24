import ChipsPreview from "./ChipsPreview/ChipsPreview";
import PizzaControls from "./ChipsControls/ChipsControls";
import axios from "axios";
import classes from "./CipsBox.module.css";
import { useEffect, useState } from "react";

import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";

const CipsBox = ({ history }) => {
  const prices = {
    Bekon: 45,
    Barbecue: 34,
    Crab: 30,
    Hickory: 46,
    Classic: 37,
    Onion: 40,
  };
  const [tastes, setTastes] = useState({});

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
        setTastes(response.data.box);
      });
  }

  function addIngredient(type) {
    const newIngredients = { ...tastes };
    newIngredients[type]++;
    setPrice(price + prices[type]);
    setTastes(newIngredients);
  }

  function removeIngredient(type) {
    if (tastes[type]) {
      const newIngredients = { ...tastes };
      newIngredients[type]--;
      setPrice(price - prices[type]);
      setTastes(newIngredients);
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
        ingredients: tastes,
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
    <div className={classes.CipsBox}>
      <ChipsPreview tastes={tastes} price={price} />
      <PizzaControls
        tastes={tastes}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        startOrdering={startOrdering}
      />
      <Modal show={ordering} cancel={stopOrdering}>
        <OrderSummary tastes={tastes} price={price} />
        <Button onClick={finishOrdering} green>
          Checkout
        </Button>
        <Button onClick={stopOrdering}>Cancel</Button>
      </Modal>
    </div>
  );
};

export default CipsBox;