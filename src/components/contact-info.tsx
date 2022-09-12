import { Col, Container, Nav, Row } from "react-bootstrap";
import logo from "../img/favicon.png"

export function ContactInfo() {
    return (<>
       
        <Container className="bg-primary">
        <Row className="p-2">
        <Col>
        <img src={logo} width={25}/>
        </Col>
        <Col className="text-white text-right font-weight-bold ">
            Join the car-volution!
        </Col>
        </Row>
        <Row className=" border-top border-info border-bottom p-2">
           <Col xs={6} md={3}>
           <p className="text-white font-weight-bold ">Carsswipe</p>
           <Nav.Link className="text-success pl-0">skapa profil</Nav.Link>
           <Nav.Link className="text-success pl-0"> Köp bil</Nav.Link>
           <Nav.Link className="text-success pl-0 pb-5">Sälj bil</Nav.Link>
           </Col> 
           <Col xs={6} md={3}>
           <p className="text-white font-weight-bold ">Kontakt & hjälp</p>
           <Nav.Link className="text-success pl-0">Så funkar det</Nav.Link>
           <Nav.Link className="text-success pl-0">Pris</Nav.Link>
           <Nav.Link className="text-success pl-0 pb-5">Kontakt</Nav.Link>
           </Col> 
           <Col xs={6} md={3}>
           <p className="text-white font-weight-bold " >För företag</p>
           <Nav.Link className="text-success pl-0">Bli företagskund</Nav.Link>
           <Nav.Link className="text-success pl-0 pb-5">Handlarlogin</Nav.Link>
     
           </Col> 
           <Col xs={6} md={3}>
           <p className="text-white font-weight-bold mb-2 m-0">Information</p>
          <p className="text-white m-0">CarsSwipe AB</p>
          <p className="text-white m-0">559167-0210</p>
          <p className="text-white m-0">företaget innehar F-skattsedel.</p>
           <Nav.Link className="text-success pl-0 pb-5">info@carswipe.se</Nav.Link>
           </Col> 
        </Row>
        <Row className="p-2">
        <Col className="text-white">copyright 2022 Carswipe Ab</Col>
        <Col className="text-white text-right">Coockie policy, Allmänna villkor & intergritetspolicy</Col>
        </Row>
        </Container>
    </>)
}