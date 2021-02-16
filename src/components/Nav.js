import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: teal;
`;

const Nav = () => (
  <Navigation>
    <h3>Math Magicians</h3>
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/calculator">
        <li>Calculator</li>
      </Link>
      <Link to="/quote">
        <li>Quote</li>
      </Link>
    </ul>
  </Navigation>
);

export default Nav;
