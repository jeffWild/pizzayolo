import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./store/store";

import "bulma/css/bulma.css";
import "./assets/styles.scss";

import TopBar from "./components/TopBar";
import Router from "./components/Router";

function App() {
  return (
    <>
      
      <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <TopBar />
          <Router />
        </BrowserRouter>
        </Provider>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
