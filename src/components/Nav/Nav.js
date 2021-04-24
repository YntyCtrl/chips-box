import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

const Nav = () => {
  return (
    <ul className={classes.Nav}>
      <NavItem url="/" exact>
        Chips Box
      </NavItem>
      <NavItem url="/checkout">Checkout</NavItem>
    </ul>
  );
};

export default Nav;
