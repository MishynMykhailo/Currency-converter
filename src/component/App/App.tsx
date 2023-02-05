import React, { useState, useEffect } from "react";
import s from "./App.module.css";
import Loader from "../Loader/Loader";
import { NbuDataCash } from "../../services/ApiServices/ApiServices";
import Header from "../Header/Header";
import Container from "../Container/Container";
import Converter from "../Converter/Converter";

const App: React.FC = () => {
  const [nbuCurrency, setNbuCurrency] = useState();
  useEffect(() => {
    NbuDataCash().then((data) => {
      if (data.length >= 1) {
        setNbuCurrency(
          data.filter((item: { r030: number }) => {
            return item.r030 === 840 || item.r030 === 978;
          })
        );
      }
    });
  }, []);
  return (
    <>
      {nbuCurrency ? (
        <Container>
          <div className={s.div}>
            <Header nbuCurrency={nbuCurrency} />
            <Converter nbuCurrency={nbuCurrency} />
          </div>
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default App;
