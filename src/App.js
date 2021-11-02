import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";

import Container from "./components/UI/Container";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
