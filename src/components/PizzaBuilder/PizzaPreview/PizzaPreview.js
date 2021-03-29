import PizzaIngredient from "../PizzaIngredient/PizzaIngredient";

import classes from "./PizzaPreview.module.css";


const PizzaPreview = ({ ingredients }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<PizzaIngredient key={ingredient + i} type={ingredient} />)
    }
  }

  return (
    <div className={classes.PizzaPreview}>
      <div className={classes.ingredients} style={{ backgroundImage: "#d1ce1f"}}>
        {result}
      </div>
    </div>
  );
}

export default PizzaPreview;