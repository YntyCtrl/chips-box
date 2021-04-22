import classes from "./Logo.module.css";
import logo from "../../../image/logo.png";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Logo of the Pizza project" />
      <div>Chips Box</div>
    </div>
  );
}

export default Logo;