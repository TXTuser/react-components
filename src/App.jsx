import React from "react";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./comp/ClassComponent";
import FuncComponent from "./comp/FuncComponent";
import ArrowFuncComponent from "./comp/ArrowFuncComponent";

function App() {
  return (
    <div className="App">
      <FuncComponent></FuncComponent>
      <ClassComponent></ClassComponent>
      <ArrowFuncComponent></ArrowFuncComponent>
    </div>
  );
}

export default App;
