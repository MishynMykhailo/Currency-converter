import React, { useEffect, useState, useCallback } from "react";
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
  const [selectCurrencyValueFrom, setSelectCurrencyValueFrom] =
    useState("nullFrom");
  const [selectCurrencyValueTo, setSelectCurrencyValueTo] = useState("nullTo");
  const [inputFrom, setInputFrom] = useState<number>(0);
  const [inputTo, setInputTo] = useState<number>(0);

  // const normalizeDataCurrency = (data: INbuCurrency[]): {}[] => {
  //   const result = data.map(({ r030, txt, cc, rate }) => {
  //     return {
  //       r030,
  //       txt,
  //       cc,
  //       rate,
  //     };
  //   });
  //   return result;
  // };
  // const memo = useCallback(() => {
  //   onConvertCurrency<INbuCurrency>(nbuCurrency);
  // }, [nbuCurrency, onConvertCurrency]);

  const memoCallackTo = useCallback(
    <T extends {}>(data: T[]) => {
      data.map((item) => {
        const propertyCurrency: any = Object.values(item);
        if (selectCurrencyValueTo === "USD") {
          if (propertyCurrency.includes("USD")) {
            const RateCurrency = propertyCurrency[2];
            const result = inputFrom / RateCurrency;
            setInputTo(result);
          }
        }
        if (selectCurrencyValueTo === "EUR") {
          if (propertyCurrency.includes("EUR")) {
            const RateCurrency = propertyCurrency[2];
            const result = inputFrom / RateCurrency;
            setInputTo(result);
          }
        }
        return data;
      });
      return data;
    },
    [inputFrom, selectCurrencyValueTo]
  );
  const memoCallackFrom = useCallback(
    <T extends {}>(data: T[]) => {
      data.map((item) => {
        const propertyCurrency: any = Object.values(item);
        if (selectCurrencyValueFrom === "USD") {
          if (propertyCurrency.includes("USD")) {
            const RateCurrency = propertyCurrency[2];
            const result = inputTo / RateCurrency;
            setInputFrom(result);
          }
        }
        if (selectCurrencyValueFrom === "EUR") {
          if (propertyCurrency.includes("EUR")) {
            const RateCurrency = propertyCurrency[2];
            const result = inputTo / RateCurrency;
            setInputFrom(result);
          }
        }
        return data;
      });
      return data;
    },
    [inputTo, selectCurrencyValueFrom]
  );
  useEffect(() => {
    memoCallackTo(nbuCurrency);
  }, [memoCallackTo, nbuCurrency]);

  function onConvertCurrency<T extends {}>(data: T[]): void {
    data.map((item) => {
      const propertyCurrency: any = Object.values(item);
      if (selectCurrencyValueTo === "USD") {
        if (propertyCurrency.includes("USD")) {
          const RateCurrency = propertyCurrency[2];
          const result = inputFrom / RateCurrency;
          setInputTo(result);
        }
      }
      return data;
    });
  }

  function onSelectHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    switch (e.target.name) {
      case "from":
        setSelectCurrencyValueFrom(e.target.value);
        break;

      case "to":
        setSelectCurrencyValueTo(e.target.value);
        break;

      default:
        setSelectCurrencyValueFrom("null");
        setSelectCurrencyValueTo("null");
        break;
    }
  }

  function onInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    switch (e.target.name) {
      case "from":
        setInputFrom(Number(e.target.value));
        break;

      case "to":
        setInputTo(Number(e.target.value));
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
          <option value="nullFrom">Select value</option>
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <input
          value={inputFrom}
          type="text"
          name="from"
          onChange={(e) => onInputHandler(e)}
        />
      </div>
      <div className={s.div}>
        <select name="to" onChange={(e) => onSelectHandler(e)}>
          <option value="nullTo">Select value</option>
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
