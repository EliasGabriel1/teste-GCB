import Img from "../Img";
import GroupBoxBestRecipes from "../GroupBoxBestRecipes";
import {Box} from "./styled"


function index(props){
    return(
        <Box>
            {props.src?<Img src={props.src} alt={props.alt} width="100%"/>:""}
            <GroupBoxBestRecipes text={props.text} buttontext={props.buttontext}/>
        </Box>
    );
}

export default index;
