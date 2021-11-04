import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 1rem auto;
  flex-direction: column;
  width: 100%;
`;

export const Item = styled.li`
  background: #303030;

  padding: 0.5rem;
  width: 100%;
  text-align: center;
`;

export const UlBase = styled.ul`

  background: #202020;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style: none;
  padding: 0.5rem 0;
  width: 100%;
`;
export const Header = styled(UlBase)`
  li{
    background: #404040;
  }
`;

export const LeadList = styled(UlBase)`
  flex-direction: column;
  justify-content: flex-start;
  list-style: none;
  border: 0.25rem solid #202020;
  padding: 0.2rem;
  background: #303030;
`;

export const LeadsContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #303030;
  border: 1rem solid #202020;
  li{
    margin: 0.3rem;
    padding: 0.2rem;
    border: 0.25rem solid #202020;
  }
`;
export const Lead = styled.li`

`;
