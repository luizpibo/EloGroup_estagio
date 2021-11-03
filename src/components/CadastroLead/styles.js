import styled from "styled-components";
import Input from "../UI/Input";
import Button from "../UI/Button";

export const Container = styled.main`
  height: 100%;
  padding: 1rem;
  text-align: center;
  width: 100%;
  header {
    font-size: 2rem;
    text-align: center;
    margin: 0 0 2rem 0;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  h1 {
    font-size: 2rem;
    text-align: center;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  justify-content: center;
  margin: 1rem 2rem;
  width: 40%;
`;

export const CheckboxTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  margin: 1rem auto;
  width: 100%;
  input {
    
  }
  th,tr,td {
  border: 0.25rem solid #202020;
  }

  th {
    background: #404040;
    font-size: 1.2rem;
    
    margin: 1rem auto;
    padding: 0.3rem;
    
    text-align: center;
  }

  td {
    font-size: 1.2rem;
    margin: 1rem auto;
    padding: 0.3rem;
    text-align: left;
  }
  
  tr{
    td:first-child {
      text-align: center;
    }
    height: 1rem;
    width: 1rem;
  }

  tr:last-child {
    width: 100%;
  }
`;

export const ButtonLead = styled(Button)`
  margin: 0;
  width: 100%;
`;

export const InputLead = styled(Input)`
  margin: 1rem 0;
`;
