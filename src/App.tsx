import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

function AppWrapper(): JSX.Element {
  return <App />;
}

export default AppWrapper;
