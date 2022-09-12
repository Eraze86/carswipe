import { Container, Row } from "react-bootstrap";
import opus from "../img/carswipe-partner-opus.png"
import autoconcept from "../img/carswipe-partner-autoconcept.png"
import ryds from "../img/carswipe-partner-ryds-2.jpg"
import hansa from "../img/carswipe-trygg-hansa.png"
import zakra from "../img/carswipe-partner-zakra.png"
import lanspara from "../img/carswipe-partner-lan-och-spar.jpg"
import bringwash from "../img/carswipe-partner-bringw.png"
import openpayment from "../img/carswipe-partner-openpayments.jpg"
import ping from "../img/carswipe-partner-ping-payments.jpg"
import carinfo from "../img/carswipe-partner-carinfo.jpg"
import northprojects from "../img/carswipe-partner-ntp.jpg"
import smart from "../img/carswipe-partner-bringw.png"

export function Partners(){
    return(<>
    <Container className="container-fluid">
    Noga utvalda Partners
    <h3 className="text-primary font-weight-bold ">En trygg bilaffär</h3>
    <Row className="justify-content-between p-3">
        <img className="partner Small shadow rounded"src={opus} alt="partner opus"/>
        <img className="partner Small shadow rounded"src={autoconcept} alt="partner autoconcept"/>
        <img className="partner Small shadow rounded"src={ryds} alt="partner ryds"/>
        <img className="partner Small shadow rounded"src={hansa} alt="partner trygghansa"/>
        <img className="partner Small shadow rounded"src={zakra} alt="partner zakra"/>
        <img className="partner Small shadow rounded"src={lanspara} alt="partner lån och spara"/>
        <img className="partner Small shadow rounded"src={bringwash} alt="partner bringwash"/>
        <img className="partner Small shadow rounded"src={openpayment} alt="partner openpayment"/>
        <img className="partner Small shadow rounded"src={ping} alt="partner ping"/>
        <img className="partner Small shadow rounded"src={carinfo } alt="partner carinfo"/>
        <img className="partner Small shadow rounded"src={northprojects} alt="partner northprojects"/>
        <img className="partner Small shadow rounded"src={smart} alt="partner smart"/>


    </Row>
    </Container>
    </>)
}