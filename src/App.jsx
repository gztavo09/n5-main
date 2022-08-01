import React from "react";
import { withNamespaces } from 'react-i18next';
import { BrowserRouter, Switch, Route } from "react-router-dom";

/* GLOBAL STYLE */
import GlobalStyle from "./globalStyle";
import Container from "./styles/container/Container";

/* COMPONENTES */
import Nav from "./components/navigation/nav";

/* VISTAS */
import Home from './views/Home';
import ListRickAndMorty from './views/ListRickAndMorty';
import ListHarryPotter from "./views/ListHarryPotter";
import "./App.css";

function App() {
  return (
    <React.Fragment>
        <GlobalStyle />
        <BrowserRouter>
          <header>
            <Nav />
          </header>
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/rick-and-morty" component={ListRickAndMorty} />
              <Route exact path="/harry-potter" component={ListHarryPotter} />
            </Switch>
          </Container>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default withNamespaces()(App);
