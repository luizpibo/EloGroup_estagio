import Table from "../../components/UI/Table";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  padding: 0 2rem;
  width: 100%;
`;

export const LeadTable = styled(Table)`
  width: 100%;
  thead {
    height: 2rem;
  }

  tbody tr {
    height: 5rem;
  }
  .draggable {
    cursor: move;
    :hover {
      transition: 1s ease;
      background-color: #606060;
    }
  }
`;

export const Buttons = styled.nav`
  display: flex;
  justify-content: space-around;
`;
