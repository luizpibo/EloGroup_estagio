import React, { useState, useEffect, useContext } from "react";

import { DragDropContext } from "react-beautiful-dnd";

import {
  Container,
  Header,
  Item,
  LeadsContainer,
} from "./styles";
import DroppableList from "./DroppableList";
import { AppContext } from "../../provider";

const status = [
  "Cliente em Potencial",
  "Dados Confirmados",
  "Reunião Agendada",
];

const ListaLeads = () => {
  let {leads} = useContext(AppContext);
  let {updateStatusLeads} = useContext(AppContext);
  const [clientePotencial, setClientePotencial] = useState([]);
  const [dadosConfirmados, setDadosConfirmados] = useState([]);
  const [reuniao, setReuniao] = useState([]);

  useEffect(() => {
    updateStates(leads);
  }, [leads]);

  function updateStates(leads) {
    setClientePotencial(
      leads.filter((lead) => lead.status === "cliente_em_potencial")
    );
    setDadosConfirmados(
      leads.filter((lead) => lead.status === "dados_confirmados")
    );
    setReuniao(leads.filter((lead) => lead.status === "reuniao_agendada"));
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
      updateStatusLeads(
        clientePotencial[source.index].nome,
        "dados_confirmados"
      );
      return;
    }

    if (
      source.droppableId === "dados_confirmados" &&
      destination.droppableId === "reuniao_agendada"
    ) {
      updateStatusLeads(
        dadosConfirmados[source.index].nome,
        "reuniao_agendada"
      );
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
          <DroppableList
            leads={clientePotencial}
            droppableId="cliente_em_potencial"
          />
          <DroppableList
            leads={dadosConfirmados}
            droppableId="dados_confirmados"
          />
          <DroppableList 
            leads={reuniao}  
            droppableId="reuniao_agendada" 
          />
        </DragDropContext>
      </LeadsContainer>
    </Container>
  );
};
export default ListaLeads;
