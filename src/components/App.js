import React from 'react';
import Header from './Header'
import { Container } from 'react-bootstrap'
import Portfolios from '../containers/Portfolios';

function App() {
  return (
    <Container className="mt-5">
      <Header />
      <Portfolios />
    </Container>
  );
}

export default App;
