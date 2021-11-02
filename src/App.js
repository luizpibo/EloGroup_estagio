import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";

import Container from "./components/Container";

const Header = styled.header`
  margin-bottom: 2rem;
  text-align: center;
`;
const Logo = styled.img`
  border-radius: 0.5rem;
  box-shadow: 2px 1px 1rem #333;
  height: 5em;
  max-width: 24rem;
`;

function App() {
  return (
    <Router>
      <Container>
        <Header>
          <Logo src="logo_elo.jpg" />
        </Header>

        <Switch>
          <Route path="/">
            <Cadastro />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
        
      </Container>
    </Router>
  );
}

export default App;
