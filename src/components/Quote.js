import React from 'react';
import styled from 'styled-components';

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  align-items: center;
  justify-content: center;
  color: grey;
  font-weight: bold;
`;

const Text = styled.h1`
  font-size: 40px;
  font-weight: normal;
`;

const Quote = () => (
  <QuoteContainer data-testid="header-wrapper">
    <Text data-testid="header">
      Pure mathematics is, in its way, the poetry of logical ideas.
    </Text>
    — Albert Einstein, German theoretical physicist
  </QuoteContainer>
);

export default Quote;
