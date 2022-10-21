import { FaSignInAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Logo, Nav, NavItem, NavLink, StyledHeader } from "./Header.styled";

const Header = () => (
  <StyledHeader>
    <Logo>
      <Link to="/">Support Desk</Link>
    </Logo>
    <Nav>
      <NavItem>
        <NavLink to="/login">
          <FaSignInAlt /> Login
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/register">
          <FaUser /> Register
        </NavLink>
      </NavItem>
    </Nav>
  </StyledHeader>
);

export default Header;
