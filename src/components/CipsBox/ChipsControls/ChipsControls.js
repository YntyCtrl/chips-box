import Button from "../../UI/Button/Button";
import ChipsControl from "./ChipsControl/ChipsControl";
import classes from "./ChipsControls.module.css";

const ChipsControls = ({
  tastes,
  addIngredient,
  removeIngredient,
  startOrdering,
}) => {
  const results = [];
  let total = 0;
  for (const taste in tastes) {
    // Add ingredient number to totals number
    total += tastes[taste];
    // Render pizza control for this ingredient
    results.push(
      <ChipsControl
        key={taste}
        add={addIngredient}
        remove={removeIngredient}
        count={tastes[taste]}
        type={taste}
      />
    );
  }

  return (
    <div className={classes.ChipsControls}>
      <strong>Chips Taste</strong>
      {results}
      <Button disabled={!total} onClick={startOrdering}>
        Order
      </Button>
    </div>
  );
};

export default ChipsControls;
