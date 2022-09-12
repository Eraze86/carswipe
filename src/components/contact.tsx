import { Col, Container, Nav, Row } from "react-bootstrap";
import faq from "../img/faq.png"
import call from "../img/call.png"
import chat from "../img/chat.png"
import mail from "../img/envelope.png"

export function Contact() {
    return (<>
        <Container className="bg-info p-2">
            Vi finns här för dig
            <h3 className="text-primary font-weight-bold ">Hur kan vi hjälpa dig?</h3>
            <Row className="p-3 flex-sm-row justify-content-end">
                <Col xs={6} md={3} className="pl-md-0 pl-xs-1 p-3">
                    <img src={faq} height={25}/>
                    <p className="m-0">Snabba svar</p>
                    <Nav.Link href="#" className="p-0 text-success">Läs vår FAQ</Nav.Link>
                </Col>
                <Col xs={6} md={3} className="p-3">
                    <img src={call} height={25}/>
                    <p className="m-0">Ring oss</p>
                    <Nav.Link href="#" className="p-0 text-success">076-887 65 78</Nav.Link>
                </Col>
                <Col xs={6} md={3} className="p-3">
                    <img src={chat} height={25} />
                    <p className="m-0">Prata med oss</p>
                    <Nav.Link href="#" className="p-0 text-success">Öppna chat</Nav.Link>
                </Col>
                <Col xs={6} md={3} className="p-3">
                    <img src={mail} height={25}/>
                    <p className="m-0">Mejla oss</p>
                    <Nav.Link href="#" className="p-0 text-success">kontakta@carswipe.se</Nav.Link>
                </Col>
            </Row>
        </Container>
    </>)
}