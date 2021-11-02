import React from "react";

import Button from "../../components/UI/Button";
import Cadastro from "../../components/CadastroUser";
import CadastroLead from "../../components/CadastroLead";
import Modal from "../../components/Modal";

import { Wrapper, Buttons, LeadTable } from "./styles";

const Data = {
  users: [
    {
      usuario: "luizpibo",
      senha: "12345678Luiz!",
    },
    {
      usuario: "bruna",
      senha: "12345678Bruna!",
    },
  ],
  leads: [
    {
      nome: "Org. Internacionais",
      telefone: "619999999999",
      email: "orgInternacionais@org.com",
      rpa: true,
      produtosDigitais: true,
      analytics: true,
      bpm: true,
      status: "cliente_em_potencial",
    },
    {
      nome: "Ind. Farm. LTDA",
      telefone: "619999999999",
      email: "orgInternacionais@org.com",
      rpa: true,
      produtosDigitais: true,
      analytics: true,
      bpm: true,
      status: "dados_confirmados",
    },
    {
      nome: "Music. Sound Live Camp",
      telefone: "619999999999",
      email: "orgInternacionais@org.com",
      rpa: true,
      produtosDigitais: true,
      analytics: true,
      bpm: true,
      status: "reunião_agendada",
    },
  ],
};

const Dashboard = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [modalUser, setModalUser] = React.useState(false);
  const [modalLead, setModalLead] = React.useState(false);

  const toggleModalLead = () => {
    setModalLead(!modalLead);
  };

  const toggleModalUser = () => {
    setModalUser(!modalUser);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalUser(false);
    setModalLead(false);
  };
  const [Leads, setLeads] = React.useState(Data.leads);
  return (
    <Wrapper>
      <Modal isOpen={showModal} onClose={closeModal}>
        {modalLead && <CadastroLead />}
        {modalUser && <Cadastro />}
      </Modal>
      <Buttons>
        <Button
          onClick={(e) => {
            toggleModalLead();
            openModal();
          }}
        >
          Novo Lead
        </Button>
        <Button
          onClick={(e) => {
            toggleModalUser();
            openModal();
          }}
        >
          Novo Usuário
        </Button>
      </Buttons>
      <LeadTable>
        <thead>
          <tr>
            <th>Cliente em Potencial</th>
            <th>Dados Confirmados</th>
            <th>Reunião Agendada</th>
          </tr>
        </thead>
        <tbody>
          {Leads.map((lead) => {
            switch (lead.status) {
              case "cliente_em_potencial":
                return (
                  <tr key={lead.nome}>
                    <td className="draggable" draggable>
                      {lead.nome}
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                );
                break;
              case "dados_confirmados":
                return (
                  <tr key={lead.nome}>
                    <td></td>
                    <td className="draggable" draggable>
                      {lead.nome}
                    </td>
                    <td></td>
                  </tr>
                );
                break;
              case "reunião_agendada":
                return (
                  <tr key={lead.nome}>
                    <td></td>
                    <td></td>
                    <td className="draggable" draggable>
                      {lead.nome}
                    </td>
                  </tr>
                );
            }
          })}
        </tbody>
      </LeadTable>
    </Wrapper>
  );
};

export default Dashboard;
