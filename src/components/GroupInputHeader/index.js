
import FormGroup from "../FormGroup";


function index(props){
    return(
        <>
            <FormGroup contentbutton={props.contentbutton} autoComoplete={props.autoComoplete} idbutton={props.idbutton} id={props.idbutton} button={props.button} placeholder={props.placeholder}/>
        </>
    )
}

export default index;