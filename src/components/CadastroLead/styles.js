import styled from "styled-components";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Table from "../UI/Table";

export const Container = styled.main`
  height: 100%;
  padding: 1rem;
  text-align: center;
  width: 100%;
  header {
    font-size: 2rem;
    text-align: center;
    margin: 2rem 0;
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
  height: 100%;
  margin: 1rem 2rem;
  width: 40%;
`;

export const CheckboxTable = styled(Table)`
  width: 100%;
  tr:first-child {
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
