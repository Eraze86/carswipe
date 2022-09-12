import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../custom.scss';
import { Card, Row, Col, NavLink} from "react-bootstrap"
import Safe from "../img/carswipe-safe-icon.png"
import Search from "../img/carswipe-sok-icon.png"
import Add from "../img/carswipe-certified-icon.png"

export function Info(){

    return(<>

    <Row className="flex-wrap m-0 container-fluid bg-primary justify-content-center align-content-center flex-column flex-lg-row">
    <Card className="flex-row p-1 m-3 m-md-lg-0">
    <Col xs={2}  className="p-0">
        <Card.Img src={Safe}/></Col>
    <Col>Carswipe är en säker plattform som jobbar med etablerade partners</Col>
    </Card>
    <Card  className="flex-row m-3 m-md-lg-0" >
    <Col xs={2} className="p-0">
        <Card.Img src={Search}/></Col>
    <Col>På Carswipe hittar du enkelt och snabbt det du letar efter <NavLink className="pl-0 text-success" href="#">Köp bil</NavLink></Col>
    </Card>
    <Card  className="flex-row m-3 m-md-lg-0">
    <Col xs={2} className="p-0" >
        <Card.Img src={Add}/></Col>
    <Col>Lägg snabbt & tryggt ett bud på den bil du vill köpa <NavLink className="pl-0 text-success" href="#">Sälj bil</NavLink></Col></Card>
    </Row>
    </>)
}