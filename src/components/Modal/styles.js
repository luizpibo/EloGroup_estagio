import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => (props.isOpen ? "flex" : "none")};
  height: 100%;
  justify-content: center;
  left: 0;
  min-width: 330px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
  `;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: inline;
  font-size: 1.5rem;
  height: 3rem;
  padding-right: 1rem;
  margin-left: 1rem;
  text-align: center;
  width: 4rem;
`;
export const Content = styled.div`
  background-color: #282c34;
  border: 0.5rem solid #1c1c1c;
  border-radius: 0.5rem;
  width: 80%;
  height: 80%;
  overflow-y: scroll;
`;