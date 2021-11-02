import React from "react";
import { Link } from "react-router-dom";
import { NotFoundWrapper } from "./styles";

const PageNotFound = () => {
  return (
    <NotFoundWrapper>
      <h1>Página não encontrada</h1>

      <Link className="Link" to="/">Voltar para a página inicial</Link>
    </NotFoundWrapper>
  );
};

export default PageNotFound;