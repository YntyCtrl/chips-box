import Button from "../../../UI/Button/Button";
import PizzaIngredient from "../../PizzaIngredient/PizzaIngredient";
import classes from "./PizzaControl.module.css";

const PizzaControl = ({ type, add, remove, count }) => {
  return (
    <div className={classes.PizzaControl}>
      <Button onClick={() => add(type)}>+</Button>
      <div className={classes.ingredient}>
        <PizzaIngredient type={type} fixed />
      </div>
      <Button onClick={() => remove(type)} disabled={!count}>
        -
      </Button>
    </div>
  );
};

export default PizzaControl;
