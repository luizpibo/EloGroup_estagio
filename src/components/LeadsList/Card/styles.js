import styled from 'styled-components';

export const ItemDraggable = styled(Item)`
  background: #305050;
  cursor: grab;
  transition: 0.3s;
  
  :hover{
    transform: scale(1.1);
  }
`;