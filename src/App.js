import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { CharacterListView } from "./views";
import "./styles/App.css";

class App extends Component {
  render() {
    return <CharacterListView />;
  }
}

export default App;
