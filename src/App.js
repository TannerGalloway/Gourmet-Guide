import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/heading/header';
import Body from './components/body/body';
import './App.css';
function App() {
  return(
        <Container style={{padding: '0px'}}>
          <Header/>
          <Body/>
        </Container>
  
  )
    
}

export default  App;
