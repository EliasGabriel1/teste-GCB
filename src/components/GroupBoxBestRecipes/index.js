import Button from "../Button";
import {H3,Content} from "./styled";

function index(props){
    return(
        <Content>
            <H3>{props.text}</H3>
            <Button buttontext={props.buttontext} />
        </Content>
    );
}

export default index;