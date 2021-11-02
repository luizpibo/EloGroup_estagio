import styled from "styled-components";

const Button = styled.button`
  background-color: #303030;
  border: 0.2rem solid gray;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  height: 3rem;
  width: 10rem;
  transition: 0.2s;
  :hover {
    background-color: #404040;
  }
  :active {
    background-color: #606060;
  }
`;

export default Button;