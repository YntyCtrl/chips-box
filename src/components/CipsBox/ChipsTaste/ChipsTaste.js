import React from "react";
import classes from "./ChipsTaste.module.css";

import BekonBackground from "../../../image/Bekon.png";
import Fanta from "../../../image/fanta.png";
import СrabBackground from "../../../image/Crab.png";
import Hickory from "../../../image/Hickory.png";
import Classic from "../../../image/Classic.png";
import Onion from "../../../image/Onion.png";
const ChipsTaste = ({ type }) => {
  const types = {
    Bekon: {
      backgroundImage: `url(${BekonBackground})`,
      width: "50px",
      height: "60px",
      borderBottom: "5px solid rgb(128, 121, 24)",
    },
    Barbecue: {
      backgroundImage: `url(${Fanta})`,
      
      width: "17px",
      height: "60px",
      borderBottom: "5px solid rgb(128, 121, 24)",
    },
    Crab: {
      backgroundImage: `url(${СrabBackground})`,
      width: "50px",
      height: "60px",
      borderBottom: "5px solid rgb(128, 121, 24)",
    },
    Hickory: {
      backgroundImage: `url(${Hickory})`,
      width: "50px",
      height: "60px",
      borderBottom: "5px solid rgb(128, 121, 24)",
    },
    Classic: {
      backgroundImage: `url(${Classic})`,
      width: "50px",
      height: "60px",
      borderBottom: "5px solid rgb(128, 121, 24)",
    },
    Onion: {
      backgroundImage: `url(${Onion})`,
      width: "50px",
      height: "60px",
      borderBottom: "5px solid rgb(128, 121, 24)",
    },
  };

 

  return (
    <div className={classes.ChipsTaste} style={types[type]}>
      <div className={classes.holder}></div>
    </div>
  );
};

export default React.memo(ChipsTaste);