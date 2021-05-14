import Button from "../../../UI/Button/Button";
import ChipsTaste from "../../ChipsTaste/ChipsTaste";
import classes from "./ChipsControl.module.css";
import { useDispatch } from "react-redux";
import { add, remove } from "../../../../store/actions/box";

const ChipsControl = ({ type,  count }) => {

  const dispatch = useDispatch();

  return (
    <div className={classes.ChipsControl}>
      <Button onClick={() => dispatch(add(type))}>+</Button>
      <div className={classes.taste}>
        <ChipsTaste type={type} fixed />
      </div>
      <Button onClick={() => dispatch(remove(type))} disabled={!count}>
        -
      </Button>
    </div>
  );
};

export default ChipsControl;
