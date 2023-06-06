import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
function App() {
  return (
    <>
      <Header />
      <CardList />
    </>
  );
}

export default App;
