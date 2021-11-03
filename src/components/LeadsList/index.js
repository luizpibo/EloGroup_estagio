import React, { useContext } from "react";

import Context from "../../pages/Dashboard/context";

import { Container, Header, LeadList, Item } from "./styles";
import Lead from './Lead'

const ListaLeads = () => {
  const status = [
    "Cliente em Potencial",
    "Dados Confirmados",
    "Reunião Agendada",
  ];

  var { leads, moveLead } = useContext(Context);
  return (
    <Container>
      <Header>
        {status.map((item, index) => {
          return <Item key={item}>{item}</Item>;
        })}
      </Header>
        <LeadList>
          {
            leads.map((lead, index) => {
              return (
                <Lead key={lead+index} lead={lead}/>
              )
            })
          }
        </LeadList>
    </Container>
  );
};

export default ListaLeads;