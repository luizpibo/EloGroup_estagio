import { Droppable, Draggable } from "react-beautiful-dnd";
import { Lead, LeadList } from "../styles";

const DroppableList = ({ leads, droppableId }) => {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <LeadList ref={provided.innerRef} {...provided.droppableProps}>
          {leads.map((lead, index) => {
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
  );
};

export default DroppableList;