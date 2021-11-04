import { createContext, useState, useEffect } from "react";
import {
  saveLeadToLocalStorage,
  saveUserToLocalStorage,
  loadLeadFromLocalStorage,
  loadUserFromLocalStorage,
} from "../utils/localStorage";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [leads, setLeads] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const leads = loadLeadFromLocalStorage();
    const users = loadUserFromLocalStorage();
    if (leads) {
      setLeads(leads);
    } else {
      setLeads([]);
    }
    if (users) {
      setUsers(users);
    } else {
      setUsers([]);
    }
  }, []);

  function updateStatusLeads(LeadName, NewStatus) {
    var oldLeads = leads;
    let newLeads = oldLeads.map((lead) => {
      if (lead.nome === LeadName) {
        lead.status = NewStatus;
      }
      return lead;
    });
    setLeads(newLeads);
    saveLeadToLocalStorage(newLeads);
  }

  //adiciona lead
  const addLead = (lead) => {
    //Adicionando status de lead
    lead.status = "cliente_em_potencial";

    //array de leads
    var Arrayleads = leads;

    //adicionando lead
    Arrayleads.push(lead);

    setLeads(Arrayleads);
    saveLeadToLocalStorage(Arrayleads);
    console.log(Arrayleads);
  };

  //adiciona usuário
  const addUser = (user) => {
    //array de usuários
    var arrayUsers = users;

    //adicionando usuário
    arrayUsers.push(user);

    setUsers(arrayUsers);
    saveUserToLocalStorage(arrayUsers);
    console.log(arrayUsers);
  };

  return (
    <AppContext.Provider value={{ leads, addLead, users, addUser, updateStatusLeads }}>
      {children}
    </AppContext.Provider>
  );
};

/*

*/
