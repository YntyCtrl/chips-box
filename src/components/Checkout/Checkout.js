import classes from "./Checkout.module.css";
import ChipsPreview from "../CipsBox/ChipsPreview/ChipsPreview";
import ChekoutForm from "./ChekoutForm/CheckoutForm";
import axios from "../../axios";
import { useSelector } from "react-redux";

const Checkout = ({ history }) => {
  const { token, id } = useSelector((state) => state.auth);
  const tastes = useSelector((state) => state.box.tastes);
  const price = useSelector((state) => state.box.price);
  function cancelCallback() {
    history.replace('/');
  }
  function submitCallback(event) {
    const data = new FormData(event.target);

    axios
      .post("/orders.json?auth=" + token, {
        name: data.get("name"),
        address: data.get("address"),
        phone: data.get("phone"),
        tastes: tastes,
        price: price,
        userId: id,
      })
      .then((response) => {
        history.replace("/");
      });

    event.preventDefault();
  }

  return (
    <div className={classes.Checkout}>
      <ChipsPreview tastes={tastes} price={price} />
      <ChekoutForm
        cancelCallback={cancelCallback}
        submitCallback={submitCallback}
      />
    </div>
  );
}
 
export default Checkout;
