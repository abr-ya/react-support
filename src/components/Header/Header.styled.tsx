import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 60px;
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

export const NavItem = styled.li`
  margin-left: 20px;
`;

// todo name collision with router?
export const NavLink = styled(Link)`
  display: flex;
  align-items: center;

  &:hover {
    color: #777;
  }
`;

export const Logo = styled.div`
  color: official;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;
