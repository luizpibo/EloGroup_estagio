import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  height: 7rem;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`;
export const Logo = styled.img`
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem #333;
  height: 4rem;
  margin: auto;
  max-width: 24rem;
  transition: 1s;
  :hover {
    box-shadow: 0 0 1.3rem #555;
  }
`;
