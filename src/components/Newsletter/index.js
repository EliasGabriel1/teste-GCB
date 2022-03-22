import { Background , BoxDados, Container} from "./styled";
import Img from "../../components/Imagens/FrameCadastro.jpg";
import GroupInputHeader from "../GroupInputHeader";

function index() {
  return (
    <Background style={{backgroundImage: `url(${Img})`}}>
            <Container>
                <BoxDados>
                    <h1>Ready for <br/>Trying a new<br/> recipe?</h1>
                    <GroupInputHeader autoComoplete="on" idbutton="search" idinput="InputHeader" button="true" placeholder="Search healthy recipes"/>
                </BoxDados>
            </Container>
    </Background>
  );
}

export default index;