import React from "react";
import FormGroup from "../FormGroup";
import Button from "./styled";

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
        <form action="">
            <div className="content-form">
                <FormGroup
                    id="name"
                    value="Nome"
                    type="text"
                    placeholder="Digite seu nome"
                />
                <FormGroup
                    id="nascimento"
                    value="Nascimento"
                    type="text"
                    placeholder="Digite sua data de nascimento"
                />
                <FormGroup
                    id="cpf"
                    value="CPF"
                    type="text"
                    placeholder="Digite Seu CPF"
                />
                <FormGroup
                    id="cep"
                    value="CEP"
                    type="text"
                    placeholder="Digite Seu CEP"
                />
                <FormGroup
                    id="adress"
                    value="Endereço"
                    type="text"
                    placeholder="Digite Seu Endereço"
                    funcao=""
                />
                <FormGroup
                    id="district"
                    value="Bairro"
                    type="text"
                    placeholder="Digite Sua rua"
                />
                <FormGroup
                    id="number"
                    value="Number"
                    type="text"
                    placeholder="Digite o número da sua casa"
                />
            </div>
            <div className="button">
                <Button onClick={handleClick} className="cadastrar">Cadastrar</Button>
            </div>
        </form>
    );
}