import { Container, Bloco, Background } from "./styled";
import Img from "../Imagens/blocoservices.jpg";
import Button from "../Button";

function index() {
  return (
    <Background style={{ backgroundImage: `url(${Img})` }}>
      <Container>
        <Bloco>
          <h3>
            The best services ready <br /> To server you
          </h3>
          <br />
          <p>
            Far far away, behind the word mountains, far from
            <br />
            the countries Vokalia and Consonantia, there live the
            <br />
            blind texts.
            <br />
            <br />
            Separated they live in Bookmarksgrove right at the
            <br />
            coast of the Semantics, a large language ocean.
            <br />
            <br />A small river named Duden flows by their place and
            <br />
            supplies it with the necessary regelialia.
          </p>

          <br />
          <Button buttontext="Know more" />
        </Bloco>
      </Container>
    </Background>
  );
}

export default index;
