import styled from "styled-components";

export const LeadDraggableContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const LeadBase = styled.li`
  align-items: center;
  display: flex;
  justify-content: baseline;
  min-height: 3rem;
  margin: 0.2rem;
  padding: 0.5rem;
  text-align: start;
  transition: 0.3s;
  width: 100%;
  strong {
    font-size: 1.5rem;
    text-transform: uppercase;
  }
  span {
    font-size: 1rem;
  }
`;

export const LeadDraggable = styled(LeadBase)`
  background: #305050;
  cursor: grab;
  :hover {
    cursor: move;
    transform: scale(1.02);
    box-shadow: 0 0 0.5rem 0.5rem #606060;
  }
`;

export const LeadDroppable = styled(LeadBase)`
  background: #252525;
`;
