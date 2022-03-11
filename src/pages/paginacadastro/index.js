import React from "react";
import Logo from "../../components/Logo";
import image from "../../components/Imagens/FrameCadastro.jpg";
import {Container, Limit, Img, MaxHeightForm, MaxHeightcontent, DivForm, SpaceLogo} from "./styled"
import Form from "../../components/Form";
import SeloForm from "../../components/SeloForm";


function Index() {  

  return (
    <>
    <Limit>
      <Container>
        <MaxHeightForm>
        <div>
        <SpaceLogo>
          <Logo/>
        </SpaceLogo>
          <MaxHeightcontent>
        <DivForm>
            <h2>
              Welcome to
              <br/>
              HEALTHY FOOD
            </h2>
            <Form/>
            <SeloForm/>
          </DivForm>
          </MaxHeightcontent>
          </div>
        </MaxHeightForm>
        <div>
          <Img src={image} alt="Imagem Banner" width="100%"/>
        </div>
      </Container>
    </Limit>
    </>
  );
}

export default Index;
