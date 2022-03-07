import React from "react";
import Logo from "../../components/Logo";
import image from "../../components/Imagens/FrameCadastro.jpg";
import {Container,Limit} from "./styled"
import Form from "../../components/Form";
import SeloForm from "../../components/SeloForm";

function Index() {

  return (
    <>
    <Limit style={{height:`100vh`, backgroundImage: `url(${image})`,backgroundRepeat: `no-repeat`, backgroundPosition:`right center`,backgroundSize:`100vh`}}>
      <Container>
        <Logo/>
        <div>
          <h2>
            Welcome to
            <br/>
            HEALTHY FOOD
          </h2>
          <Form/>
          <SeloForm/>
        </div>
      </Container>
    </Limit>
    {/* <div>
      <ImagemCadastro/>
    </div> */}
    </>
  );
}

export default Index;
