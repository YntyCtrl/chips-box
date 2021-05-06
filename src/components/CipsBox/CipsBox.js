import ChipsPreview from "./ChipsPreview/ChipsPreview";
import ChipsControls from "./ChipsControls/ChipsControls";

import classes from "./CipsBox.module.css";
import {  useState } from "react";

import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useSelector } from "react-redux";

const CipsBox = ({ history }) => {
  

  const tastes = useSelector((state) => state.tastes);
  const price = useSelector((state) => state.price);
  const [ordering, setOrdering] = useState(false);
  

  // useEffect(loadDefaults, []);

  // function loadDefaults() {
  //   axios
  //     .get("https://chips-box-default-rtdb.firebaseio.com/default.json")
  //     .then((response) => {
  //       setPrice(response.data.price);

  //       // For arrays
  //       // setIngredients(Object.values(response.data.ingredients));
  //       // For objects
  //       setTastes(response.data.box);
  //     });
  // }

  

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }
  function finishOrdering() {
    setOrdering(false);
    // loadDefaults();
    history.push("/checkout");
  }
  return (
    <div className={classes.CipsBox}>
      <ChipsPreview
       tastes={tastes} 
       price={price} />
      <ChipsControls
        tastes={tastes}
        
        startOrdering={startOrdering}
      />
      <Modal 
        show={ordering} 
        cancel={stopOrdering}>
        <OrderSummary 
          tastes={tastes} 
          price={price} />
        <Button onClick={finishOrdering} green>
          Checkout
        </Button>
        <Button onClick={stopOrdering}>Cancel</Button>
      </Modal>
    </div>
  );
};

export default CipsBox;