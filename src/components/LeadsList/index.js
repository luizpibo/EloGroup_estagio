import React, { useState, useEffect } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import {
  Container,
  Header,
  LeadList,
  Item,
  LeadsContainer,
  Lead,
} from "./styles";

import {
  loadLeadFromLocalStorage,
  saveLeadToLocalStorage,
} from "../../services/localStorage";

const status = [
  "Cliente em Potencial",
  "Dados Confirmados",
  "Reunião Agendada",
];

const ListaLeads = () => {
  const [leads, setLeads] = useState([]);
  const [clientePotencial, setClientePotencial] = useState([]);
  const [dadosConfirmados, setDadosConfirmados] = useState([]);
  const [reuniao, setReuniao] = useState([]);

  useEffect(() => {
    const leads = loadLeadFromLocalStorage();
    if(!leads) {
      return;
    }
    setLeads(leads);
    setClientePotencial(leads.filter((lead) => lead.status === "cliente_em_potencial"));
    setDadosConfirmados(leads.filter((lead) => lead.status === "dados_confirmados"));
    setReuniao(leads.filter((lead) => lead.status === "reuniao_agendada"));
  },[leads]);

  function updateStatusLeads(oldLead, NewStatus) {
    var oldLeads = leads;
    let newLeads = oldLeads.map((lead) => {
      if (lead.nome === oldLead) {
        lead.status = NewStatus;
      }
      return lead;
    });
    setLeads(newLeads);
    saveLeadToLocalStorage(newLeads);
  }

  const onEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    if (
      source.droppableId === "cliente_em_potencial" &&
      destination.droppableId === "dados_confirmados"
    ) {
      updateStatusLeads(clientePotencial[source.index].nome, "dados_confirmados");
      return;
    }

    if (
      source.droppableId === "dados_confirmados" &&
      destination.droppableId === "reuniao_agendada"
    ) {
      updateStatusLeads(dadosConfirmados[source.index].nome, "reuniao_agendada");
      return;
    }
  };

  return (
    <Container>
      <Header>
        {status.map((item, index) => {
          return <Item key={item}>{item}</Item>;
        })}
      </Header>
      <LeadsContainer>
        <DragDropContext onDragEnd={onEnd}>
          <Droppable droppableId="cliente_em_potencial">
            {(provided) => (
              <LeadList ref={provided.innerRef} {...provided.droppableProps}>
                {clientePotencial.map((lead, index) => {
                  return (
                    <Draggable
                      key={lead.nome + index}
                      draggableId={lead.nome + index}
                      index={index}
                    >
                      {(provided) => (
                        <Lead
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {lead.nome}
                        </Lead>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </LeadList>
            )}
          </Droppable>
          <Droppable droppableId="dados_confirmados">
            {(provided) => (
              <LeadList ref={provided.innerRef} {...provided.droppableProps}>
                {dadosConfirmados.map((lead, index) => {
                  return (
                    <Draggable
                      key={lead.nome + index}
                      draggableId={lead.nome + index}
                      index={index}
                    >
                      {(provided) => (
                        <Lead
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {lead.nome}
                        </Lead>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </LeadList>
            )}
          </Droppable>
          <Droppable droppableId="reuniao_agendada">
            {(provided) => (
              <LeadList ref={provided.innerRef} {...provided.droppableProps}>
                {reuniao.map((lead, index) => {
                  return (
                    <Draggable
                      key={lead.nome + index}
                      draggableId={lead.nome + index}
                      index={index}
                    >
                      {(provided) => (
                        <Lead
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {lead.nome}
                        </Lead>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </LeadList>
            )}
          </Droppable>
        </DragDropContext>
      </LeadsContainer>
    </Container>
  );
};
export default ListaLeads;
