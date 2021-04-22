import PizzaIngredient from "../PizzaIngredient/PizzaIngredient";

import classes from "./PizzaPreview.module.css";


const PizzaPreview = ({ ingredients, price }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<PizzaIngredient key={ingredient + i} type={ingredient} />);
    }
  }

  return (
    <div className={classes.PizzaPreview}>
      <div className={classes.pizza}>
        <div
          className={classes.ingredients}
          
        >
          {result}
        </div>
      </div>
      <div className={classes.price}>{price} som</div>
    </div>
  );
};

export default PizzaPreview;
