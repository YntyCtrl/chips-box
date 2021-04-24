import classes from "./CheckoutSummary.module.css";
import ChipsPreview from "../../CipsBox/ChipsPreview/ChipsPreview";
import Button from "../../UI/Button/Button";

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <ChipsPreview
          tastes={{
            Bekon: 5,
            Barbecue: 10,
            Classic: 50,
          }}
          price={2477}
        />
      </div>
      <div>
        <Button>Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
      </div>
    </div>
  );
}
 
export default CheckoutSummary;