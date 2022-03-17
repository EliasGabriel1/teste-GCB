
import GroupInputHeader from "../GroupInputHeader";
import {Container, BoxDados} from "./styled";

function index(){
    return(
        <Container>
            <BoxDados>
                <h1>Ready for <br/>Trying a new<br/> recipe?</h1>
                <GroupInputHeader autoComoplete="on" idbutton="search" idinput="InputHeader" button="true" placeholder="Search healthy recipes"/>
            </BoxDados>
        </Container>
    )
}

export default index;