import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../custom.scss';
import { Button, Container, Row} from "react-bootstrap"

export function HeadText(){
 return(<>
 
 <Container className="header-text text-center">
        <Row className="container-fluid justify-content-center flex-column p-2 m-0 ">
        <p className="text-primary m-0">Bilaffärer, helt enkelt</p>
        <h2>Med Carswipe säljer du en bil <br/>på ett tryggare och enklare sätt.</h2>
        </Row>
        <Button variant="success"  className="font-weight-bold border rounded-pill text-white">+Skapa annons</Button>
        <Button variant="primary"  className="font-weight-bold border rounded-pill text-white">Så funkar det</Button>
       
        </Container>
        </>)
}