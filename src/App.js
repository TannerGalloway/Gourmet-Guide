import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/heading/header';
import Body from './components/body/body';
import './App.css';

class App extends Component {

  render() {
    return (
      <Container style={{padding: '0px'}}>
          <Header/>
          <Body/>
      </Container>
    )
  }
}

export default App;
