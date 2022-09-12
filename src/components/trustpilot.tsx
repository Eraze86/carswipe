import { Container } from "react-bootstrap";
import bil from "../img/carswipe_salj_bil2.jpg"
export function Trustpilot(){
    return(<>
    <Container className="container-fluid"><h3 className="text-primary font-weight-bold ">Bilaffärer utan omvägar</h3>

<img className="Small shadow img-fluid rounded" src={bil}/>
</Container>
    </>)
}