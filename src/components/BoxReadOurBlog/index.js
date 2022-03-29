
import Img from "../Img";
import src from "../Imagens/Profile.jpg";
import {Box,ContentText,ContentProfile, ImgProfile} from "./styled";

function index(props) {
    return (
        <Box>
            {props.src ? <Img src={props.src} alt={props.alt} /> : ""}
            <ContentText>
                <h3>Quick-start guide <br />
                    to nuts and seeds</h3>
                <ContentProfile>
                    <ImgProfile src={src}></ImgProfile>
                    <span>Kevin Ibrahim</span>
                </ContentProfile>
            </ContentText>
        </Box>
    );
}

export default index;