import BoxReadOurBlog from "../BoxReadOurBlog";
import Image1 from "../Imagens/Comida1.jpg";
import {Carrossel,Container,ButtonOne,ButtonTwo} from "./styled";

function index(){
    function scrollright() {
      document.getElementById('container').scrollLeft += 283;
    };
    function scrollLeft() {
      document.getElementById('container').scrollLeft -= 283;
    };
     
    return(
        <Container>
            <ButtonOne onClick={scrollLeft} type="button">{"<"}</ButtonOne>
        <Carrossel id="container">
            <BoxReadOurBlog src={Image1} alt="alt" text="Broccoli Salad width Bacon" buttontext="See Recipe"/>
            <BoxReadOurBlog src={Image1} alt="alt" text="Broccoli Salad width Bacon" buttontext="See Recipe"/>
            <BoxReadOurBlog src={Image1} alt="alt" text="Broccoli Salad width Bacon" buttontext="See Recipe"/>
            <BoxReadOurBlog src={Image1} alt="alt" text="Broccoli Salad width Bacon" buttontext="See Recipe"/>
            <BoxReadOurBlog src={Image1} alt="alt" text="Broccoli Salad width Bacon" buttontext="See Recipe"/>
            <BoxReadOurBlog src={Image1} alt="alt" text="Broccoli Salad width Bacon" buttontext="See Recipe"/>
            <BoxReadOurBlog src={Image1} alt="alt" text="Broccoli Salad width Bacon" buttontext="See Recipe"/>
            <BoxReadOurBlog src={Image1} alt="alt" text="Broccoli Salad width Bacon" buttontext="See Recipe"/>
            <BoxReadOurBlog src={Image1} alt="alt" text="Broccoli Salad width Bacon" buttontext="See Recipe"/>
        </Carrossel>
            <ButtonTwo onClick={scrollright} type="button">{">"}</ButtonTwo>
        </Container>
    );
}

export default index;