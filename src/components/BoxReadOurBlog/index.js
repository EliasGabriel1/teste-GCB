
import Img from "../Img";
import {Box} from "./styled"

function index(props) {
    return (
        <Box>
            {props.src ? <Img src={props.src} alt={props.alt} /> : ""}
            <h5>Quick-start guide <br />
                to nuts and seeds</h5>
            <div>
                <o>
                Kevin Ibrahim
                </o>
            </div>
        </Box>
    );
}

export default index;