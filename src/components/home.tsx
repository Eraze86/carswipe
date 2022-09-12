import { Button, Col, Container, Row } from "react-bootstrap";
import { Info } from "./info";
import { Partners } from "./partners";
import finance from "../img/finance.png"
import bankid from "../img/bankid.png"
import ad from "../img/ad.png"
import money from "../img/money.png"
import insurance from "../img/insurance_warranty.png"
import { Trustpilot } from "./trustpilot";
export function Home(){
    return(<>
    <Info/>
    <Container className="container-fluid">
    <Row className="pt-1 flex-column flex-md-row">
    <Col className="m-2 p-1">
    Gör billaffären med Carswipe
    <h3 className="text-primary font-weight-bold ">Tryggare och säkrare med Carswipe</h3>
    <div className="embed-responsive embed-responsive-16by9">
        <iframe className="rounded embed-responsive-item" 
    src="https://www.youtube.com/embed/JT9X3-flqz4" 
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen></iframe></div>
    </Col>
    <Col  className="p-1 mt-4">
 <ul>
    <li>
    <Row className="mt-1 p-1 align-items-center">
    <Col xs={2} lg={1}><img src={finance} width={30} alt="finance symbol"/></Col>
    <Col> <p className="font-weight-bold m-0">Billån med säkerhet.</p>
    <p className="m-0">Bättre lån med låg ränta (3.49%)</p></Col>
    </Row>
    </li>
    <li>
    <Row className="mt-1 p-1 align-items-center">
    <Col xs={2}lg={1}><img src={bankid}  width={30} alt="bankid symbol"/></Col>
    <Col> <p className="font-weight-bold m-0">Köp och sälj med BankId.</p>
    <p className="m-0">En säkerhet för båda köpare och säljare</p></Col>
    </Row>
    </li>
    <li>
    <Row className="mt-1 p-1 align-items-center">
    <Col xs={2} lg={1}><img src={ad}  width={30} alt="ad symbol"/></Col>
    <Col> <p className="font-weight-bold m-0">Kostnadsfri annonsering.</p>
    <p className="m-0">Skapa en annons på Carswipe och betala enast vid slitförd affär</p></Col>
    </Row>
    </li>
    <li>
    <Row className="mt-1 p-1 align-items-center">
    <Col xs={2} lg={1}><img src={money}  width={30} alt="money symbol"/></Col>
    <Col> <p className="font-weight-bold m-0">Säker betalning & ägarbyte.</p>
    <p className="m-0"> Vi ser till att du får betala och hjälper till med ägarbyte</p></Col>
    </Row>
    </li>
    <li>
    <Row className="mt-1 p-1 align-items-center">
    <Col xs={2} lg={1}><img src={insurance}  width={30} alt="insurance symbol"/></Col>
    <Col><p className="font-weight-bold m-0"> Försäkring och garanti.</p> 
    <p className="m-0">Var trygg om något händer</p></Col>
    </Row>
    </li>
    <li><Col className="p-0"><Button variant="success" className="font-weight-bold mt-3 text-white rounded-pill">+ Skapa annons</Button></Col></li>
 </ul>
</Col>
    </Row>
        </Container>
<Partners/>
<Trustpilot/>
 
    </>)
}