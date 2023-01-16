import React from "react";
import s from "./App.module.css";
import {
  monobankData,
  NbuDataCash,
} from "../../services/ApiServices/ApiServices";
import Header from "../Header/Header";
import Container from "../Container/Container";
function App() {
  return (
    <Container>
      <Header />
      <div>main</div>
    </Container>
  );
}

export default App;
