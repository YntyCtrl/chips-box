import ChipsPreview from "./ChipsPreview/ChipsPreview";
import ChipsControls from "./ChipsControls/ChipsControls";

import classes from "./CipsBox.module.css";
import { useEffect,  useState } from "react";

import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/actions/box";


const CipsBox = ({ history }) => {
  
  const dispatch = useDispatch();
  const tastes = useSelector((state) => state.box.tastes);
  const price = useSelector((state) => state.box.price);
  const [ordering, setOrdering] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  

  useEffect(() => dispatch(load()), [dispatch]);
  
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
   if (isAuthenticated) {
     setOrdering(true);
   } else {
     history.push("/auth");
   }
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
        <Button onClick={finishOrdering} green="green">
          Checkout
        </Button>
        <Button onClick={stopOrdering}>Cancel</Button>
      </Modal>
    </div>
  );
};

export default CipsBox;