import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: teal;
  color: white;
`;

const List = styled.ul`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
`;

const Nav = () => (
  <Navigation>
    <h1>Math Magicians</h1>
    <List>
      <StyledLink to="/react-calculator/">
        <li>Home</li>
      </StyledLink>
      <StyledLink to="/react-calculator/calculator">
        <li>Calculator</li>
      </StyledLink>
      <StyledLink to="/react-calculator/quote">
        <li>Quote</li>
      </StyledLink>
    </List>
  </Navigation>
);

export default Nav;
