import classes from "./Order.module.css";

const Order = ({ name, phone, address, tastes, price }) => {
    const outputIngredients = Object.keys(tastes)
        .map(taste => <em>{taste} - {tastes[taste]}</em>);

    return (
        <div className={classes.Order}>
            <div>{name}, {phone}, {address}</div>
            <div>{outputIngredients}</div>
            <strong>{price}</strong>
        </div>
    );
}

export default Order;