import Button from "../../UI/Button/Button";
import ChipsControl from "./ChipsControl/ChipsControl";
import classes from "./ChipsControls.module.css";

const ChipsControls = ({
  tastes,
  startOrdering,
}) => {
  const results = [];
  let total = 0;
  for (const taste in tastes) {
    
    total += tastes[taste];
    
    results.push(
      <ChipsControl
        key={taste}
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
