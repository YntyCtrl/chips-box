import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

const Nav = () => {
  return (
    <ul className={classes.Nav}>
      <NavItem url="/" exact>
        Box made
      </NavItem>
      <NavItem url="/orders">Orders</NavItem>
    </ul>
  );
};

export default Nav;
