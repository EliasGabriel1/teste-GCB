import Carrossel from "../../components/Carrossel";
import {Container,ContainerText} from "./styled";

function index(){
    return(
        <Container>
            <ContainerText>
                <h3>Read Our Blog</h3>
                <p>Far far away, behind the word mountains,  far from the countries <br/>Vokalia and Consonantia, there live the blind texts.</p>
            </ContainerText>
            <Carrossel/>
        </Container>
    );
}

export default index;