import Button from "../../../UI/Button/Button";
import PizzaTaste from "../../ChipsTaste/ChipsTaste";
import classes from "./ChipsControl.module.css";

const ChipsControl = ({ type, add, remove, count }) => {
  return (
    <div className={classes.ChipsControl}>
      <Button onClick={() => add(type)}>+</Button>
      <div className={classes.taste}>
        <PizzaTaste type={type} fixed />
      </div>
      <Button onClick={() => remove(type)} disabled={!count}>
        -
      </Button>
    </div>
  );
};

export default ChipsControl;
