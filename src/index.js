import React from "react";
import ReactDOM from "react-dom";

import "bulma/css/bulma.css";
import "./assets/styles.scss";

function App() {
  return (
    <div className="App">
      <p>Salut</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
