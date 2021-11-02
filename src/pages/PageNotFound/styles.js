import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  font-size: 2rem;
  height: 50vh;

  .Link {
    margin-top: 1rem;
    font-size: 1.5rem;
    text-decoration: none;
    color: var(--main-color);
    padding: 1rem;
    border: 0.25rem solid white;
    :hover {
      background-color: #404040;
    }
  }
`;