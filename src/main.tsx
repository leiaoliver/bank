import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "./App";

const domNode = document.getElementById("root");
if (domNode) {
  ReactDOM.render(<AppWrapper />, domNode);
} else {
  console.error("Elemento com id 'root' não encontrado no DOM");
}
