import { Background , BoxDados, Container} from "./styled";
import Img from "../../components/Imagens/FrameCadastro.jpg";
import GroupInputHeader from "../GroupInputHeader";

function index(props) {
  return (
    <Background style={{backgroundImage: `url(${Img})`}}>
            <Container>
                <BoxDados>
                    {!props.lp?<h1>Ready for <br/>Trying a new<br/> recipe?</h1>:<h2> Join our membership  <br/> to get special offer</h2>}
                    <GroupInputHeader contentbutton={props.contentbutton} autoComoplete={props.autoComoplete} idbutton={props.idbutton} idinput={props.idinput} button={props.button} placeholder={props.placeholder}/>
                </BoxDados>
            </Container>
    </Background>
  );
}

export default index;