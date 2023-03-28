import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkStyled = styled(NavLink)`
  &.active .navigation__linkText {
    color: #805ad5;
  }
`;
