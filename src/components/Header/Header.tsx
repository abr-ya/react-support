import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Logo, Nav, NavItem, NavLink, StyledHeader } from "./Header.styled";
import { useAppDispatch, useAppSelector } from "features/typedRedux";
import { Btn } from "components/Common.styled";
import { logout } from "features/auth/authSlice";

const Header = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const Logout = () => {
    dispatch(logout());
  };

  return (
    <StyledHeader>
      <Logo>
        <Link to="/">Home</Link>
      </Logo>
      <Nav>
        {user ? (
          <Btn onClick={Logout}>
            <FaSignOutAlt /> Logout
          </Btn>
        ) : (
          <>
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
          </>
        )}
      </Nav>
    </StyledHeader>
  );
};

export default Header;
