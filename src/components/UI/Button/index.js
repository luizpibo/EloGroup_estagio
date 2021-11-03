import styled from "styled-components";

const Button = styled.button`
  background-color: #303030;
  border: 0.2rem solid gray;
  border-radius: 0.5rem;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  color: white;
  cursor: pointer;
  height: 3rem;
  width: 10rem;
  transition: 0.2s;
  :hover {
    background-color: #404040;
    box-shadow: 0 0 0.5rem #606060;
  }
  :active {
    background-color: #606060;
  }
`;

export default Button;
