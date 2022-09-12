import { Outlet } from "react-router-dom";
import carswipsLogo from "../img/carswipe-logo-active.png"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Button, Nav, Col } from "react-bootstrap"
import { HeadText} from "./head-text";
import { Contact } from "./contact";
import { ContactInfo } from "./contact-info";

export function Layout() {

    return (<>
        <header className="position-relative" >
            {/* Create hamburger menu with bootstrap */}
            <Navbar  collapseOnSelect expand="lg" bg="light fixed-top">
                <Col xs={2} sm={1} md={2} >
                    <img alt="carswipe logo" src={carswipsLogo} width={125} />
                </Col>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >

                    <Nav className="container-fluid align-items-end flex-lg-row flex-column-reverse p-0">
                        <Col className="flex-lg-row flex-column container-fluid container justify-content-lg-center mr-1 align-items-end " xs={5} sm={6}  >
                            <Nav.Link href="#">köp bil</Nav.Link>
                            <Nav.Link href="#">sälj bil </Nav.Link>
                            <Nav.Link href="#">så funkar det</Nav.Link>
                            <Nav.Link href="#">pris</Nav.Link>
                            <Nav.Link href="#">kontakta</Nav.Link>
                        </Col>
                        <Col className="text-right pr-0 pt-2 pt-lg-0" xs={6} sm={5} >
                            <Button variant="outline-success" className="font-weight-bold rounded-pill ">Logga in</Button>
                            <Button variant="success"  className=" text-white font-weight-bold border rounded-pill ">+Skapa annons</Button></Col>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            <HeadText/>
        </header>
        <main>
            <Outlet />
        </main>
        <footer className="bg-info p-0 mt-5">
<Contact/>
        </footer>
        <footer className="bg-primary p-0">
<ContactInfo/>
        </footer>

    </>)
}
