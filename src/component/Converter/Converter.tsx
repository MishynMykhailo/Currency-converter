import React, { useEffect, useState, useCallback } from "react";
import ConvertSection from "../ConvertSection/ConvertSection";
import { convertValueFrom, convertValueTo } from "../helpers/convertValue";

interface INbuCurrency {
  r030: string;
  txt: string;
  cc: string;
  rate: number;
}

interface IProps {
  nbuCurrency: INbuCurrency[];
}
const Converter: React.FC<IProps> = ({ nbuCurrency }) => {
  const [selectCurrencyValueFrom, setSelectCurrencyValueFrom] = useState("UAH");
  const [selectRateFrom, setSelectRateFrom] = useState<number>(0);
  const [selectCurrencyValueTo, setSelectCurrencyValueTo] = useState("UAH");
  const [selectRateTo, setSelectRateTo] = useState(0);
  const [inputFrom, setInputFrom] = useState<number>(0);
  const [inputTo, setInputTo] = useState<number>(0);

  const findRates = useCallback(
    (data: INbuCurrency[]) => {
      for (let i = 0; i < data.length; i += 1) {
        if (data[i].cc === selectCurrencyValueFrom) {
          setSelectRateFrom(data[i].rate);
        }
        if (data[i].cc === selectCurrencyValueTo) {
          setSelectRateTo(data[i].rate);
        }
        if (selectCurrencyValueFrom === "UAH") {
          setSelectRateFrom(1);
        }
        if (selectCurrencyValueTo === "UAH") {
          setSelectRateTo(1);
        }
      }
    },
    [selectCurrencyValueFrom, selectCurrencyValueTo]
  );
  useEffect(() => {
    findRates(nbuCurrency);
  }, [findRates, nbuCurrency, selectCurrencyValueFrom, selectCurrencyValueTo]);

  function onSelectHandler(e: React.ChangeEvent<HTMLSelectElement>): void {
    const { value, name } = e.target;
    switch (name) {
      case "from":
        setSelectCurrencyValueFrom(value);
        setInputFrom(0);
        setInputTo(0);
        break;
      case "to":
        setSelectCurrencyValueTo(value);
        setInputFrom(0);
        setInputTo(0);
        break;
      default:
        setSelectCurrencyValueFrom("null");
        setSelectCurrencyValueTo("null");
        break;
    }
  }

  function onInputHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value, name } = e.target;
    switch (name) {
      case "from":
        setInputFrom(Number(value));
        convertValueFrom(
          Number(value),
          selectCurrencyValueFrom,
          selectCurrencyValueTo,
          selectRateFrom,
          selectRateTo,
          setInputFrom,
          setInputTo
        );
        break;

      case "to":
        setInputTo(Number(value));
        convertValueTo(
          Number(value),
          selectCurrencyValueFrom,
          selectCurrencyValueTo,
          selectRateFrom,
          selectRateTo,
          setInputFrom,
          setInputTo
        );
        break;

      default:
        setInputFrom(0);
        setInputTo(0);
        break;
    }
  }
  return (
    <ConvertSection
      onSelectHandler={onSelectHandler}
      onInputHandler={onInputHandler}
      stateInputFrom={inputFrom}
      stateInputTo={inputTo}
    />
  );
};

export default Converter;
