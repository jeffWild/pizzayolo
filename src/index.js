import React from "react";
import ReactDOM from "react-dom";

import "bulma/css/bulma.css";
import "./assets/styles.scss";

import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <div className="App">
        <TopBar />
        <p>Salut</p>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
