import classes from "./Logo.module.css";
import logo from "../../../image/Logo.png";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Logo of the Chips project" />
      <div className={classes.name}>Chips Box</div>
    </div>
  );
}

export default Logo;