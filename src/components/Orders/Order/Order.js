import classes from "./Order.module.css";

const Order = ({ name, phone, address, tastes, price }) => {
    const outputIngredients = Object.keys(tastes)
        .map(taste => <em key={taste}>({taste} - {tastes[taste]}), </em>);

    return (
        <div className={classes.Order}>
            <div className={classes.name}>{name}, {phone}, {address}</div>
            <div>{outputIngredients}</div>
            <strong>{price}som</strong>
        </div>
    );
}

export default Order;