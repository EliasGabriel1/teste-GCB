import {Container, Bloco, Background} from "./styled";
import Img from "../Imagens/blocoservices.jpg";
import Button from "../Button";

function index(){
    return(
        <Background style={{backgroundImage: `url(${Img})`}}>
            <Container>
            <Bloco>
                <h3>aaaaa</h3>
                <o>lorem ipsum</o>

                <Button buttontext="Know more"/>
            </Bloco>
            </Container>
        </Background>
    );
}

export default index;