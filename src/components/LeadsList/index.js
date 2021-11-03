import React, { useState, useContext } from "react";

import Context from "../../pages/Dashboard/context";

import { Container, Header, LeadItem, LeadList, Item,ItemDraggable } from "./styles";

const ListaLeads = () => {
  const status = [
    "Cliente em Potencial",
    "Dados Confirmados",
    "Reunião Agendada",
  ];

  var { leads, moveLead } = useContext(Context);
  console.log(leads);
  return (
    <Container>
      <Header>
        {status.map((item, index) => {
          return <Item key={item}>{item}</Item>;
        })}
      </Header>
      <LeadList>
        {leads.map((lead, index) => {
          switch (lead.status) {
            case "cliente_em_potencial":
              return (
                <LeadItem key={lead.nome}>
                  <ItemDraggable key={lead.nome+" cliente em potencial"} draggable >{lead.nome}</ItemDraggable>
                  <Item key={lead.nome+" dados confirmados"}>{}</Item>
                  <Item key={lead.nome+" reuniao agendada"}>{}</Item>
                </LeadItem>
              );
            case "dados_confirmados":
              return (
                <LeadItem key={lead.nome}>
                  <Item key={lead.nome+" cliente em potencial"}>{}</Item>
                  <Item key={lead.nome+" dados confirmados"}>{lead.nome}</Item>
                  <Item key={lead.nome+" reuniao agendada"}>{}</Item>
                </LeadItem>
              );
            case "reunião_agendada":
              return (
                <LeadItem key={lead.nome}>
                  <Item key={lead.nome+" cliente em potencial"}>{}</Item>
                  <Item key={lead.nome+" dados confirmados"}>{}</Item>
                  <Item key={lead.nome+" reuniao agendada"}>{lead.nome}</Item>
                </LeadItem>
              );
            default:
              return;
          }
        })}
      </LeadList>
    </Container>
  );
};

export default ListaLeads;
