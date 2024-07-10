import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { Button } from 'bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  let [shoes] = useState(data)
  return (
    <div ClassName="Main">
      <Navbar bg = "dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav ClassName="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <div className="container"></div>
       <div className="row"></div>
        <div className='col-md-4'>
          <img src={"process.env.PUBLIC_URL + /shoe1.png"}></img>
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
        <div className='col-md-4'>
          <img src={"process.env.PUBLIC_URL + /shoe2.png"}></img>
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
        <div className='col-md-4'>
          <img src={"process.env.PUBLIC_URL + /shoe3.png"}></img>
          <h4>상품명</h4>
          <p>상품설명</p>
    </div>
  );
}

export default App;
