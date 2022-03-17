
import FormGroup from "../FormGroup";


function index(props){
    return(
        <>
            <FormGroup autoComoplete={props.autoComoplete} idbutton={props.idbutton} id={props.idbutton} button={props.button} placeholder={props.placeholder}/>
        </>
    )
}

export default index;