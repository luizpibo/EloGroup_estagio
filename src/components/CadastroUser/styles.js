import styled from "styled-components";
import Button from "../UI/Button";

export const Main = styled.main`
  width: 100%;
  header {
    font-size: 2rem;
    text-align: center;
    margin: 0 0 2rem 0;
  }
`;

export const ButtonCadastroUser = styled(Button)`
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 20rem;
  text-align: start;
`;

export const LabelErro = styled.label`
  color: red;
  display: block;
  font-size: 0.7rem;
  margin: 0.5rem 0 0;
  max-width: inherit;
`;
