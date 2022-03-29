import React from "react";
import FormGroup from "../FormGroup";
import {Button, Form, FormContent, FormGroupSpecial, ContainerButton} from "./styled";

export default function index() {
    
    function handleClick() {
        var seu_email = document.getElementById("seu_email").value;
        var nome = document.getElementById("nome").value;
        var Email = document.getElementById("Email").value;
        var telefone = document.getElementById("telefone").value;
        var rua = document.getElementById("rua").value;
        var numero = document.getElementById("numero").value;
        var complemento = document.getElementById("complemento").value;
        var bairro = document.getElementById("bairro").value;
        var cidade = document.getElementById("cidade").value;
        var uf = document.getElementById("uf").value;
        var cep = document.getElementById("CEP").value;
      
        const data = {
          seu_email: seu_email,
          nome: nome,
          email: Email,
          telefone: telefone,
          rua: rua,
          número: numero,
          complemento: complemento,
          bairro: bairro,
          cidade: cidade,
          uf: uf,
          cep: cep,
        };
      
        document.cookie=data
      };
      
    return (
        <Form action="">
            <FormContent>
                <FormGroup
                    id="name"
                    value="Nome"
                    type="text"
                    placeholder="Nome"
                />
                <FormGroup
                    id="nascimento"
                    value="Nascimento"
                    type="text"
                    placeholder="Nascimento"
                />
                <FormGroup
                    id="cpf"
                    value="CPF"
                    type="text"
                    placeholder="CPF"
                />
                <FormGroup
                    id="cep"
                    value="CEP"
                    type="text"
                    placeholder="CEP"
                />
                <FormGroup
                    id="adress"
                    value="Endereço"
                    type="text"
                    placeholder="Endereço"
                />
                <FormGroupSpecial>
                <FormGroup
                    id="district"
                    value="Bairro"
                    type="text"
                    placeholder="Bairro"
                />
                <FormGroup
                    id="number"
                    value="Number"
                    type="text"
                    placeholder="Number"
                />
                </FormGroupSpecial>
            </FormContent>
            <ContainerButton>
                <Button onClick={handleClick} className="cadastrar">Cadastrar</Button>
            </ContainerButton>
        </Form>
    );
}