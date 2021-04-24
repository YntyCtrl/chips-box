import PizzaTaste from "../ChipsTaste/ChipsTaste";

import classes from "./ChipsPreview.module.css";


const ChipsPreview = ({ tastes, price }) => {
  const result = [];
  for (const taste in tastes) {
    for (let i = 0; i < tastes[taste]; i++) {
      result.push(<PizzaTaste key={taste + i} type={taste} />);
    }
  }

  return (
    <div className={classes.ChipsPreview}>
      <div className={classes.pizza}>
        <div className={classes.tastes}>{result}</div>
      </div>
      <div className={classes.price}>{price} som</div>
    </div>
  );
};

export default ChipsPreview;
