import React,{useContext} from "react";

import Input from "../UI/Input";
import { Form, LabelErro, Main, ButtonCadastroUser} from "./styles"

import {AppContext} from "../../provider";

const CadastroUser = ({toggleModalUser}) => {
  //States--------------------------------------------------------------------------------------------------
  const [inputUsuario, setInputUsuario] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [confirmaSenha, setConfirmaSenha] = React.useState("");
  const [erros, setErros] = React.useState({
    user: false,
    password: false,
    confirmedPassword: false,
  });
  const {addUser} = useContext(AppContext);

  //Funções-------------------------------------------------------------------------------------------------

  //Manipulando valores
  function handleValueChange(event) {
    //Capturando valo e name do input
    const { name, value } = event.target;

    //Selecionando e atualizando o state
    switch (name) {
      case "usuario":
        setInputUsuario(value);
        break;
      case "senha":
        setSenha(value);
        break;
      case "confirmaSenha":
        setConfirmaSenha(value);
        break;
      default:
        break;
    }
  }

  //Validação de senha
  function validatePassword(password) {
    //Variavel que armazena os erros
    var errosPassword = [];
    //Verifica se a senha contém no mínimo 8 caracteres
    if (password.length < 8) errosPassword.push("8 chars");
    //Verifica se a senha contém no maximo 16 caracteres
    if (password.length > 16) errosPassword.push("16 chars");
    //Verifica se a senha contém no mínimo 1 letra minúscula
    if (password.search(/[a-z]/i) < 0) errosPassword.push("minusculo");
    //Verifica se a senha contém no mínimo 1 letra maiúscula
    if (password.search(/[A-Z]/) < 0) errosPassword.push("maiusuculo");
    //Verifica se a senha contém no mínimo 1 número
    if (password.search(/[0-9]/) < 0) errosPassword.push("numero");
    //Verifica se a senha contém no mínimo 1 caractere especial
    if (password.search(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/) < 0)
      errosPassword.push("char especial");


    //Se houver erros, retorna o array false ou o array...
    if (errosPassword.length > 0) {
      return false;
    }

    //Se não houver erros, retorna true
    return true;
  }

  //Envio do formulário
  function handleSubmit(event) {
    //Cancela o envio do formulário
    event.preventDefault();

    //Erros
    var errosValid = {};

    //Verifica se o usuário contem espaços vazios ou contém menos de 3 caracteres
    if (inputUsuario.indexOf(" ") !== -1 || inputUsuario.length < 4) {
      errosValid = {
        ...errosValid,
        user: true,
      };
    }

    //Verifica se a confirmação de senha é diferente da senha
    if (senha !== confirmaSenha) {
      errosValid = { ...errosValid, confirmedPassword: true };
    }

    if (!validatePassword(senha)) {
      errosValid = { ...errosValid, password: true };
    }

    //Verifica se a senha é válida
    if (
      errosValid.password ||
      errosValid.confirmedPassword ||
      errosValid.user
    ) {
      window.alert("Favor preencha corretamente o formulário");
    } else {
      errosValid = { ...errosValid, password: false };
      var dados = {};
      dados.usuario = inputUsuario;
      dados.senha = senha;
      addUser(dados);
      window.alert("Usuário cadastrado com sucesso!");
      toggleModalUser();
    }
    setErros(errosValid);
  }

  return (
    <Main>
      <header>Cadastro usuário</header>
      <Form onSubmit={handleSubmit}>
        <label>Usuário*</label>
        <LabelErro>{erros.user && "Nome de usuário inválido"}</LabelErro>
        <Input
          name="usuario"
          type="text"
          onChange={handleValueChange}
          placeholder="Digite o usuário"
          value={inputUsuario}
          required
        />

        <label>Password*</label>
        <LabelErro>
          {erros.password &&
            "A senha deve possuir ao menos 8 caracteres, contendo ao menos, um caracter especial, numérico  e alfanumérico"}
        </LabelErro>
        <Input
          name="senha"
          onChange={handleValueChange}
          type="password"
          value={senha}
          placeholder="Digite a senha"
          required
        />

        <label>Confirmar Password*</label>
        <LabelErro>{erros.confirmedPassword && "Senhas não coferem"}</LabelErro>
        <Input
          name="confirmaSenha"
          onChange={handleValueChange}
          type="password"
          value={confirmaSenha}
          placeholder="Confirme a senha"
          required
        />
        <ButtonCadastroUser>Registrar</ButtonCadastroUser>
      </Form>
    </Main>
  );
};

export default CadastroUser;
