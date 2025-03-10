import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2em;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <h1>Travel Helper</h1>
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/destinations">Destinations</NavLink>
      <NavLink to="/bookings">Bookings</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/my-bookings">My Bookings</NavLink>
    </Nav>
  </HeaderWrapper>
);

export default Header;