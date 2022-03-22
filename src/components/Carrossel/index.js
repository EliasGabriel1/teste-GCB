import BoxReadOurBlog from "../BoxReadOurBlog";
import Image1 from "../Imagens/Comida1.jpg";
import {Carrossel} from "./styled";

function index(){
    return(
        <Carrossel>
            <BoxReadOurBlog src={Image1} alt="alt" text="Broccoli Salad width Bacon" buttontext="See Recipe"/>
            <BoxReadOurBlog src={Image1} alt="alt" text="Broccoli Salad width Bacon" buttontext="See Recipe"/>
            <BoxReadOurBlog src={Image1} alt="alt" text="Broccoli Salad width Bacon" buttontext="See Recipe"/>
            <BoxReadOurBlog src={Image1} alt="alt" text="Broccoli Salad width Bacon" buttontext="See Recipe"/>
        </Carrossel>
    );
}

export default index;