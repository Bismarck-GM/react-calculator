import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
import Home from './Home';
import Quote from './Quote';
import Calculator from './Calculator';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100vh;
  align-items: center;
  justify-content: center; 
`;

const App = () => (
  <Container>
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/calculator" exact component={Calculator} />
        <Route path="/quote" exact component={Quote} />
      </Switch>
    </Router>
  </Container>
);

export default App;
