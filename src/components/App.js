import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
import Home from './Home';
import Quote from './Quote';
import Calculator from './Calculator';

const Container = styled.div`
  max-width: 100%;
  min-height: 100%;
  background-color: #F3F3F3;
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
