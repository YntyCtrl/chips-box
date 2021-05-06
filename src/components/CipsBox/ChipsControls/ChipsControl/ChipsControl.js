import Button from "../../../UI/Button/Button";
import PizzaTaste from "../../ChipsTaste/ChipsTaste";
import classes from "./ChipsControl.module.css";
import { useDispatch } from "react-redux";

const ChipsControl = ({ type,  count }) => {

  const dispatch = useDispatch();

  return (
    <div className={classes.ChipsControl}>
      <Button onClick={() => dispatch({ type: "ADD_INGREDIENT", taste: type })}>
        +
      </Button>
      <div className={classes.taste}>
        <PizzaTaste type={type} fixed />
      </div>
      <Button
        onClick={() => dispatch({ type: "REMOVE_INGREDIENT", taste: type })}
        disabled={!count}
      >
        -
      </Button>
    </div>
  );
};

export default ChipsControl;
