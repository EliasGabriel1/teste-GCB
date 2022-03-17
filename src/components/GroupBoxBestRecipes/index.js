import Button from "../Button";

function index(props){
    return(
        <div>
            <h3>{props.text}</h3>
            <Button> {props.buttontext}</Button>
        </div>
    );
}

export default index;