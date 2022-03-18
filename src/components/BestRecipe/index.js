import Grid from "../../components/GridBoxRecipes";
import {Container} from "./styled"

function index(){
    return (
        <Container>
            <h2>Our Best Recipes</h2>
            <p>Far far away,  behind the world mountains, far from the countries 
                <br/>
                Vokalia and Consonantia, there live the blind texts.
            </p>
            <Grid/>
        </Container>
    );
}

export default index;