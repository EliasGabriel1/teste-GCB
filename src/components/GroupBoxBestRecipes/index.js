import Button from "../Button";
import {H3} from "./styled";

function index(props){
    return(
        <div>
            <H3>{props.text}</H3>
            <Button buttontext={props.buttontext} />
        </div>
    );
}

export default index;