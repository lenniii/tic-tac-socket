import React from "react";
import Home from "./containers/home";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Game from "./containers/game";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/room/:id" component={Game} />
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
