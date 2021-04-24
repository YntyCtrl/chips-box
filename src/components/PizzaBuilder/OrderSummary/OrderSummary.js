import classes from "./OrderSummary.module.css";

const OrderSummary = ({ ingredients, price }) => {
  const labels = {
    Bekon: "Bekon",
    Barbecue: "Barbecue",
    Crab: "Crab",
    Hickory: "Hickory",
    Classic: "Classic",
    Onion: "Onion",
  };
  const results = Object.keys(ingredients)
    .map(type => <li>{labels[type]}: {ingredients[type]}</li>);

  return (
    <div className={classes.OrderSummary}>
      <h3>Order summary</h3>
      <ul>
        {results}
      </ul>
      <strong>Total price: {price} som</strong>
    </div>
  );
}

export default OrderSummary;