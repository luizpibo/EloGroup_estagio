import React from "react";
import { Container, Content, CloseButton } from "./styles";

const Modal = ({ children, isOpen, onClose }) => {
  return (
    <Container isOpen={isOpen}>
      <Content>
        <CloseButton onClick={onClose}>X</CloseButton>
        {children}
      </Content>
    </Container>
  );
};

export default Modal;
