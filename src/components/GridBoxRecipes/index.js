import BoxBestRecipes from "../BoxBestRecipes";
import Image1 from "../Imagens/Comida1.jpg";
import {Grid} from "./styled";

function index(){
    return(
        <Grid>
            <BoxBestRecipes src={Image1} alt="alt" text="Broccoli Salad width Bacon" buttontext="See Recipe"/>
            <BoxBestRecipes src={Image1} alt="alt" text="Broccoli Salad width Bacon" buttontext="See Recipe"/>
            <BoxBestRecipes src={Image1} alt="alt" text="Broccoli Salad width Bacon" buttontext="See Recipe"/>
            <BoxBestRecipes src={Image1} alt="alt" text="Broccoli Salad width Bacon" buttontext="See Recipe"/>
        </Grid>
    );
}

export default index;