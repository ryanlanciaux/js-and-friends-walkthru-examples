import React from "react";
import ReactDOM from "react-dom";
import { Link, Router } from "@reach/router";

import StateProps from "./examples/StateProps";
import Effects from "./examples/Effects";
import CustomHook from "./examples/CustomHook";
import Refs from "./examples/Refs";
import Reducer from "./examples/Reducer";
import Context from "./examples/Context";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">State Props</Link>
        </li>
        <li>
          <Link to="/effects">Effects</Link>
        </li>
        <li>
          <Link to="/customHook">Custom Hook</Link>
        </li>
        <li>
          <Link to="/refs">Refs</Link>
        </li>
        <li>
          <Link to="/reducer">Reducer</Link>
        </li>
        <li>
          <Link to="/context">Context</Link>
        </li>
      </ul>
      <Router>
        <StateProps path="/" />
        <Effects path="/effects" />
        <CustomHook path="customHook" />
        <Refs path="/refs" />
        <Reducer path="/reducer" />
        <Context path="/context" />
      </Router>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
