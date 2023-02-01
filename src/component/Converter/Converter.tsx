import React, { useEffect, useState, useCallback } from "react";
import { convertValueFrom, convertValueTo } from "../helpers/convertValue";
import s from "./Converter.module.css";

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
  const [selectRateTo, setSelectRateTo] = useState<number>(0);
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

  function onSelectHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    const { value, name } = e.target;
    switch (name) {
      case "from":
        setSelectCurrencyValueFrom(e.target.value);
        convertValueFrom(
          inputFrom,
          value,
          selectCurrencyValueTo,
          selectRateFrom,
          selectRateTo,
          setInputFrom,
          setInputTo
        );
        break;
      case "to":
        setSelectCurrencyValueTo(e.target.value);
        convertValueTo(
          inputTo,
          selectCurrencyValueFrom,
          value,
          selectRateFrom,
          selectRateTo,
          setInputFrom,
          setInputTo
        );
        break;
      default:
        setSelectCurrencyValueFrom("null");
        setSelectCurrencyValueTo("null");
        break;
    }
  }

  function onInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
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
    <section className={s.section}>
      <div className={s.div}>
        <select name="from" onChange={(e) => onSelectHandler(e)}>
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <input
          value={inputFrom}
          type="number"
          name="from"
          onChange={(e) => onInputHandler(e)}
        />
      </div>
      <div className={s.div}>
        <select name="to" onChange={(e) => onSelectHandler(e)}>
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <input
          value={inputTo}
          type="text"
          name="to"
          onChange={(e) => onInputHandler(e)}
        />
      </div>
    </section>
  );
};

export default Converter;
