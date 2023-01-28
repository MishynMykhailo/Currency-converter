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
  const [selectCurrencyValueFrom, setSelectCurrencyValueFrom] = useState("UAH");
  const [selectCurrencyValueTo, setSelectCurrencyValueTo] = useState("UAH");
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

  // const memoCallackTo = useCallback(
  //   <T extends {}>(data: T[]) => {
  //     data.map((item) => {
  //       const propertyCurrency: any = Object.values(item);
  //       if (selectCurrencyValueTo === "USD") {
  //         if (propertyCurrency.includes("USD")) {
  //           const RateCurrency = propertyCurrency[2];
  //           const result = inputFrom / RateCurrency;
  //           return setInputTo(result);
  //         }
  //       } else if (selectCurrencyValueTo === "EUR") {
  //         if (propertyCurrency.includes("EUR")) {
  //           const RateCurrency = propertyCurrency[2];
  //           const result = inputFrom / RateCurrency;
  //           return setInputTo(result);
  //         }
  //       }
  //       return data;
  //     });
  //     return data;
  //   },
  //   [inputFrom, selectCurrencyValueTo]
  // );

  // const memoCallackFrom = useCallback(
  //   <T extends {}>(data: T[]) => {
  //     data.map((item) => {
  //       const propertyCurrency: any = Object.values(item);
  //       if (selectCurrencyValueFrom === "USD") {
  //         if (propertyCurrency.includes("USD")) {
  //           const RateCurrency = propertyCurrency[2];
  //           const price = inputTo / RateCurrency;
  //           const result = price * RateCurrency;

  //           setInputFrom(inputTo);
  //           setInputTo(result);
  //         }
  //       } else if (selectCurrencyValueFrom === "EUR") {
  //         if (propertyCurrency.includes("EUR")) {
  //           const RateCurrency = propertyCurrency[2];
  //           const result = inputTo / RateCurrency;

  //           return setInputFrom((prevState) => {
  //             return result;
  //           });
  //         }
  //       } else if (
  //         selectCurrencyValueFrom === "USD" &&
  //         selectCurrencyValueTo === "USD"
  //       ) {
  //         setInputTo(inputTo);
  //         setInputFrom(inputFrom);
  //       }
  //       return data;
  //     });
  //     return data;
  //   },
  //   [inputFrom, inputTo, selectCurrencyValueFrom, selectCurrencyValueTo]
  // );

  // function onConvertCurrency<T extends {}>(data: T[]): void {
  //   data.map((item) => {
  //     const propertyCurrency: any = Object.values(item);
  //     if (selectCurrencyValueTo === "USD") {
  //       if (propertyCurrency.includes("USD")) {
  //         const RateCurrency = propertyCurrency[2];
  //         const result = inputFrom / RateCurrency;
  //         setInputTo(result);
  //       }
  //     }
  //     return data;
  //   });
  // }

  function onSelectHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    switch (e.target.name) {
      case "from":
        // const data = nbuCurrency.map((item) => {
        //   const propertyCurrency: any = Object.values(item);
        //   if (selectCurrencyValueFrom === "USD") {
        //     if (propertyCurrency.includes("USD")) {
        //       const RateCurrency = propertyCurrency[2];
        //       const price = inputTo / RateCurrency;
        //       const result = price * RateCurrency;

        //       setInputFrom(inputTo);
        //       setInputTo(result);
        //     }
        //   }
        //   return nbuCurrency;
        // });

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
  // function calculate<T extends {}>(
  //   data: T[],
  //   value: number,
  //   currencyValueTo: string,

  //   fnSetFrom: (arg: number) => void,
  //   fnSetTo: (arg2: number) => void
  // ): void {
  //   data.map((item) => {
  //     const propertyCurrency = Object.values(item);
  //     if (propertyCurrency.includes(currencyValueTo)) {
  //       const result = Number(propertyCurrency[2]) * Number(value);

  //       fnSetFrom(Number(value));
  //       fnSetTo(Number(result));
  //     }
  //     return 0;
  //   });
  //   // const result = Number(data?.rate) * Number(e.target.value);

  //   // setInputFrom(Number(e.target.value));
  //   // setInputTo(Number(result));
  // }

  //
  function calculate2<T extends {}>(
    data: T[],
    value: number,
    currencyValueTo: string,
    currencyValueFrom: string,
    fnSetFrom: (arg: number) => void,
    fnSetTo: (arg2: number) => void
  ): void {
    data.map((item) => {
      const propertyCurrency = Object.values(item);
      if (propertyCurrency.includes(currencyValueTo)) {
        if (currencyValueFrom === currencyValueTo) {
          fnSetFrom(Number(value));
          fnSetTo(Number(value));
        } else if (currencyValueFrom === "USD" && currencyValueTo === "EUR") {
          if (currencyValueFrom > currencyValueTo) {
            const result = Number(propertyCurrency[2]) * Number(value);
            fnSetFrom(Number(value));
            fnSetTo(Number(result));
          }
        } else {
          const result = Number(propertyCurrency[2]) * Number(value);
          fnSetFrom(Number(value));
          fnSetTo(Number(result));
        }
      } else if (currencyValueFrom === "UAH" && currencyValueTo === "UAH") {
        fnSetFrom(Number(value));
        fnSetTo(Number(value));
      }
      return 0;
    });
  }

  function onInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    switch (e.target.name) {
      case "from":
        calculate2<INbuCurrency>(
          nbuCurrency,
          Number(e.target.value),
          selectCurrencyValueTo,
          selectCurrencyValueFrom,
          setInputFrom,
          setInputTo
        );

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
