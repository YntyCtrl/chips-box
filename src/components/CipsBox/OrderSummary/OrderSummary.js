import classes from "./OrderSummary.module.css";

const OrderSummary = ({ tastes, price }) => {
  const labels = {
    Bekon: "Bekon",
    Barbecue: "Barbecue",
    Crab: "Crab",
    Hickory: "Hickory",
    Classic: "Classic",
    Onion: "Onion",
  };
  const results = Object.keys(tastes).map((type) => (
    <li>
      {labels[type]}: {tastes[type]}
    </li>
  ));

  return (
    <div className={classes.OrderSummary}>
      <h3>Order summary</h3>
      <ul>{results}</ul>
      <strong>Total price: {price} som</strong>
    </div>
  );
};

export default OrderSummary;