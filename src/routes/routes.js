import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Works from "../pages/Works";
import Sidebar from "../components/Sidebar";
import GlobalStyle from "../content/styles/Global";

function routes() {
  return (
    <>
      <div className="App">
        <GlobalStyle />
        <BrowserRouter>
          <Sidebar />
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Skills" component={Skills} />
            <Route exact path="/Works" component={Works} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default routes;
