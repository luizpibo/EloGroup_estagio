import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  header {
    font-size: 2rem;
    text-align: center;
    margin: 2rem 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 20rem;
  text-align: start;

  button {
    background: unset;
    border: 0.25em solid #f0f0f0;
    color: #f0f0f0;
    height: 3rem;
    margin: 1.5rem 0;
    transition: 0.2s;

    :hover {
      background: #404040;
    }
    :active {
      transform: scale(0.98);
    }
  }
`;

export const LabelErro = styled.label`
  color: red;
  display: block;
  font-size: 0.7rem;
  margin: 0.5rem 0 0;
  max-width: inherit;
`;
