import { useEffect, useState, React } from "react";

import Context from "./context";
import {
  saveLeadToLocalStorage,
  saveUserToLocalStorage,
  loadLeadFromLocalStorage,
  loadUserFromLocalStorage,
} from "../../services/localStorage";

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
  
  //Estado dos leads e usuários
  const [leads, setLeads] = useState([]);
  const [users, setUsers] = useState([]);

  //Carregando valores do local storage
  useEffect(() => {
    const users = loadUserFromLocalStorage();
    const leads = loadLeadFromLocalStorage();
    if (users) {
      setUsers(users);
    }
    if (leads) {
      setLeads(leads);
    }
  }, []);

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

  //adiciona lead
  const addLead = (lead) => {
    //Adicionando status de lead
    lead.status = "cliente_em_potencial";

    //array de leads
    var Arrayleads = leads;

    //adicionando lead
    Arrayleads.push(lead);

    setLeads(leads);
    saveLeadToLocalStorage(leads);
    console.log(leads);
  };

  //adiciona usuário
  const addUser = (user) => {
    //array de usuários
    var arrayUsers = users;

    //adicionando usuário
    arrayUsers.push(user);

    setUsers(users);
    saveUserToLocalStorage(users);
    console.log(users);
  };

  //Move lead
  const moveLead = (lead, status) => {

  };
  return (
    <Context.Provider value={{leads,users,moveLead}}>
      <Wrapper>
        <Modal isOpen={showModal} onClose={closeModal}>
          {modalLead && (
            <CadastroLead
              addLead={addLead.bind(this)}
              toggleModalLead={toggleModalLead.bind(this)}
            />
          )}
          {modalUser && (
            <CadastroUser
              addUser={addUser.bind(this)}
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
        {leads.length === 0 && <h2>Nenhuma lead cadastrada</h2>}
      </Wrapper>
    </Context.Provider>
  );
};

export default Dashboard;
