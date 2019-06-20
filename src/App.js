import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/header';
import Body from './components/body/homepage/homeBody';
function App() {
  return (
      <Container>
        <Header/>
        <Body/>
      </Container>
  
    
  )
}

export default  App;
