import Img from "../Img";
import GroupBoxBestRecipes from "../BoxBestRecipes";

function index(props){
    return(
        <div>
            <Img src={props.src} alt={props.alt} />
            <GroupBoxBestRecipes text={props.text} buttontext={props.buttontext}/>
        </div>
    );
}

export default index;
