import { useState, React } from "react";

import Button from "../../components/UI/Button";
import CadastroLead from "../../components/CadastroLead";
import CadastroUser from "../../components/CadastroUser";
import LeadsList from "../../components/LeadsList";
import Modal from "../../components/Modal";
import { Wrapper, Buttons } from "./styles";

const Dashboard = () => {
  //Estado dos modais
  const [showModal, setShowModal] = useState(false);
  const [modalUser, setModalUser] = useState(false);
  const [modalLead, setModalLead] = useState(false);

  //Abre/fecha modal de cadastro de lead
  const toggleModalLead = () => {
    setModalLead(!modalLead);
    setShowModal(!showModal);
  };

  //Abre/fecha modal de cadastro de usuário
  const toggleModalUser = () => {
    setModalUser(!modalUser);
    setShowModal(!showModal);
  };

  //fecha modal
  const closeModal = () => {
    setShowModal(false);
    setModalUser(false);
    setModalLead(false);
  };

  return (
    <Wrapper>
      <Modal isOpen={showModal} onClose={closeModal}>
        {modalLead && (
          <CadastroLead
            toggleModalLead={toggleModalLead.bind(this)}
          />
        )}
        {modalUser && (
          <CadastroUser
            toggleModalUser={toggleModalUser.bind(this)}
          />
        )}
      </Modal>
      <Buttons>
        <Button
          onClick={(e) => {
            toggleModalLead();
          }}
        >
          Novo Lead
        </Button>
        <Button
          onClick={(e) => {
            toggleModalUser();
          }}
        >
          Novo Usuário
        </Button>
      </Buttons>
      <LeadsList />
    </Wrapper>
  );
};

export default Dashboard;
