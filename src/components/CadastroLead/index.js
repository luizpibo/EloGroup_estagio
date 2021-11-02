import React from "react";
import { Container, Content, Wrapper, InputLead, CheckboxTable, ButtonLead } from "./styles";


const CadastroLead = (addLead) => {
  //Objeto que será enviado para o backend
  const [lead, setLead] = React.useState({
    nome: "",
    telefone: "",
    email: "",
    rpa: false,
    produtosDigitais: false,
    analytics: false,
    bpm: false,
  });
  const [selectAll, setSelectAll] = React.useState(false);

  //Manipulando valores
  function handleValueChange(event) {
    //Capturando valo e name do input
    const { name, value } = event.target;
    var newLead = { ...lead };

    //Selecionando e atualizando o state
    switch (name) {
      case "nomeLead":
        newLead.nome = value;
        break;
      case "telefone":
        newLead.telefone = value;
        break;
      case "email":
        newLead.email = value;
        break;
      case "rpa":
        newLead.rpa = !newLead.rpa;
        break;
      case "produtosDigitais":
        newLead.produtosDigitais = !newLead.produtosDigitais;
        break;
      case "analytics":
        newLead.analytics = !newLead.analytics;
        break;
      case "bpm":
        newLead.bpm = !newLead.bpm;
        break;
      case "selectAll":
        setSelectAll(!selectAll);
        newLead.rpa = !selectAll;
        newLead.produtosDigitais = !selectAll;
        newLead.analytics = !selectAll;
        newLead.bpm = !selectAll;
        break;
      default:
        break;
    }
    setLead(newLead);
  };
  
  //Salvando nova Lead
  function saveLead(){
    console.log(lead);
  }

  return (
    <Container>
      <header>Novo lead</header>
      <Content>
        <Wrapper>
          <label>Nome*</label>
          <InputLead
            name="nomeLead"
            type="text"
            onChange={handleValueChange}
            placeholder="Digite o nome da Lead "
            value={lead.nome}
            required
          />
          <label>Telefone*</label>
          <InputLead
            name="telefone"
            type="text"
            onChange={handleValueChange}
            placeholder="Digite o telefone da Lead "
            value={lead.telefone}
            required
          />
          <label>Email*</label>
          <InputLead
            name="email"
            type="email"
            onChange={handleValueChange}
            placeholder="Digite o email da Lead "
            value={lead.email}
            required
          />
        </Wrapper>
        <Wrapper>
          <label>Oportunidades*</label>
          <CheckboxTable>
            <thead>
              <tr>
                <th>
                  <input
                    name="selectAll"
                    type="checkbox"
                    onChange={handleValueChange}
                  />
                </th>
                <th> Selecionar todos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    checked={lead.rpa}
                    name="rpa"
                    type="checkbox"
                    onChange={handleValueChange}
                  />
                </td>
                <td>RPA</td>
              </tr>
              <tr>
                <td>
                  <input
                    checked={lead.produtosDigitais}
                    name="produtosDigitais"
                    type="checkbox"
                    onChange={handleValueChange}
                  />
                </td>
                <td>Produtos Digitais</td>
              </tr>{" "}
              <tr>
                <td>
                  <input
                    checked={lead.analytics}
                    name="analytics"
                    type="checkbox"
                    onChange={handleValueChange}
                  />
                </td>
                <td>Analytics</td>
              </tr>{" "}
              <tr>
                <td>
                  <input
                    checked={lead.bpm}
                    name="bpm"
                    type="checkbox"
                    value={lead.bpm}
                    onChange={handleValueChange}
                  />
                </td>
                <td>BPM</td>
              </tr>
            </tbody>
          </CheckboxTable>
          <ButtonLead onClick={saveLead}> Salvar </ButtonLead>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default CadastroLead;
