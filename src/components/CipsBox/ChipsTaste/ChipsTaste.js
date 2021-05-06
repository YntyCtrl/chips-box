import React from "react";
import classes from "./ChipsTaste.module.css";

import BekonBackground from "../../../image/Bekon.png";
import Barbecue from "../../../image/Barbecue.png";
import СrabBackground from "../../../image/Crab.png";
import Hickory from "../../../image/Hickory.png";
import Classic from "../../../image/Classic.png";
import Onion from "../../../image/Onion.png";
const ChipsTaste = ({ type, fixed }) => {
  const types = {
    Bekon: {
      backgroundImage: `url(${BekonBackground})`,
      width: "50px",
      height: "60px",
    },
    Barbecue: {
      backgroundImage: `url(${Barbecue})`,
      width: "50px",
      height: "60px",
    },
    Crab: {
      backgroundImage: `url(${СrabBackground})`,
      width: "50px",
      height: "60px",
    },
    Hickory: {
      backgroundImage: `url(${Hickory})`,
      width: "50px",
      height: "60px",
    },
    Classic: {
      backgroundImage: `url(${Classic})`,
      width: "50px",
      height: "60px",
    },
    Onion: {
      backgroundImage: `url(${Onion})`,
      width: "50px",
      height: "60px",
    },
  };

 

  return <div className={classes.ChipsTaste} style={types[type]}></div>;
};

export default React.memo(ChipsTaste);