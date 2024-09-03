import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import data from './data.js'
import { useState } from 'react';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './routes/Detail.js';

function App() {
  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="Main">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav ClassName="me-auto">
            <Nav.Link onClick={()=> {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=> {navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path="/" element={
          <>
          <div className='main-bg'></div>
          <div className="container">
            <div className='row'>
              <Card shoes={shoes[0]} i={1}></Card>
              <Card shoes={shoes[1]} i={2}></Card>
              <Card shoes={shoes[2]} i={3}></Card>
            </div>
          </div>
          </>
        }></Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}></Route>
        <Route path="*" element={<div>없는 페이지입니다 404 Error</div>}></Route>
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버입니다</div>}></Route>
          <Route path="location" element={<About/>}></Route>
        </Route>
        <Route path='/event' element={<EventPage></EventPage>}>
          <Route path='one' element={<p>첫 주문시 신발 1+1 이벤트</p>}></Route>
          <Route path='two' element={<p>생일 기념 쿠폰 발급받기</p>}></Route>
        </Route>
      </Routes>
    </div>
  );  
}
function About () {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}
function EventPage() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}
function Card(props) {
  return (
    <div className='col-md-4'>
            <img src={process.env.PUBLIC_URL + '/shoe'+props.i+'.png'} width="70%"></img>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
          </div>
  )
}
export default App;