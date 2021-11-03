import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { LeadDraggable, LeadDroppable, LeadDraggableContainer } from "./styles";

export default function Lead({ lead, index }) {
  const [cards, setCards] = useState([lead.nome]);

  function organizaLead() {
    var newArray = [];
    switch (lead.status) {
      case "cliente_em_potencial":
        newArray = [lead.nome, " ", " "];
        break;
      case "dados_confirmados":
        newArray = [" ", lead.nome, " "];
        break;
      case "reuniao_agendada":
        newArray = [" ", " ", lead.nome];
        break;
      default:
        return;
    }
    setCards(newArray);
  }
  useEffect(() => {
    organizaLead();
  }, [lead.status]);
  return (
          <LeadDraggableContainer>
            {cards.map((card, index) => {
              if (card === undefined) return;
              if (card === " ") {
                return<LeadDroppable/>    

              } else {
                return <LeadDraggable key={index}>{card}</LeadDraggable>;
              }
            })}
          </LeadDraggableContainer>
  );
}
