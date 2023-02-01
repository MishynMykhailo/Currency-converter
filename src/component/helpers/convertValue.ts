function convertValueFrom(
  value: number,
  currencyValueFrom: string,
  currencyValueTo: string,
  rateFrom: number,
  rateTo: number,
  fnSetFrom: (arg: number) => void,
  fnSetTo: (arg2: number) => void
): void {
  if (currencyValueFrom === currencyValueTo) {
    fnSetFrom(Number(value));
    fnSetTo(Number(value));
  } else if (currencyValueFrom === "USD" && currencyValueTo === "EUR") {
    if (rateFrom > rateTo) {
      const price = rateFrom / rateTo;
      const result = Number(value) * price;
      fnSetFrom(value);
      fnSetTo(result);
    } else if (rateFrom < rateTo) {
      const price = rateTo / rateFrom;
      const result = Number(value) / price;
      fnSetFrom(value);
      fnSetTo(result);
    }
  } else if (currencyValueFrom === "EUR" && currencyValueTo === "USD") {
    if (rateFrom > rateTo) {
      const price = rateFrom / rateTo;
      const result = price * Number(value);
      fnSetFrom(value);
      fnSetTo(result);
    } else if (rateFrom < rateTo) {
      const price = rateTo / rateFrom;
      const result = price / Number(value);
      fnSetFrom(value);
      fnSetTo(result);
    }
  } else if (currencyValueFrom === "USD" && currencyValueTo === "EUR") {
    if (rateFrom > rateTo) {
      const price = rateFrom / rateTo;
      const result = Number(value) / price;
      fnSetFrom(result);
      fnSetTo(value);
    } else if (rateFrom < rateTo) {
      const price = rateTo / rateFrom;
      const result = Number(value) * price;
      fnSetFrom(result);
      fnSetTo(value);
    }
  } else if (currencyValueFrom === "EUR" && currencyValueTo === "USD") {
    if (rateFrom > rateTo) {
      const price = rateFrom / rateTo;
      const result = Number(value) / price;
      fnSetTo(value);
      fnSetFrom(result);
    } else if (rateFrom < rateTo) {
      const price = rateTo / rateFrom;
      const result = Number(value) * price;
      fnSetFrom(result);
      fnSetTo(value);
    }
  } else if (currencyValueFrom === "UAH") {
    if (rateFrom > rateTo) {
      const price = rateFrom / rateTo;
      const result = Number(value) / price;
      fnSetFrom(value);
      fnSetTo(result);
    } else if (rateFrom < rateTo) {
      const price = rateFrom / rateTo;
      const result = Number(value) * price;
      fnSetFrom(value);
      fnSetTo(result);
    }
  }
}
function convertValueTo(
  value: number,
  currencyValueFrom: string,
  currencyValueTo: string,
  rateFrom: number,
  rateTo: number,
  fnSetFrom: (arg: number) => void,
  fnSetTo: (arg2: number) => void
): void {
  if (currencyValueTo === currencyValueFrom) {
    fnSetFrom(Number(value));
    fnSetTo(Number(value));
  } else if (currencyValueFrom === "USD" && currencyValueTo === "EUR") {
    if (rateFrom > rateTo) {
      const price = rateFrom / rateTo;
      const result = Number(value) / price;
      fnSetFrom(result);
      fnSetTo(value);
    } else if (rateFrom < rateTo) {
      const price = rateTo / rateFrom;
      const result = Number(value) * price;
      fnSetFrom(result);
      fnSetTo(value);
    }
  } else if (currencyValueFrom === "EUR" && currencyValueTo === "USD") {
    if (rateFrom > rateTo) {
      const price = rateFrom / rateTo;
      const result = Number(value) / price;
      fnSetTo(value);
      fnSetFrom(result);
    } else if (rateFrom < rateTo) {
      const price = rateTo / rateFrom;
      const result = Number(value) * price;
      fnSetFrom(result);
      fnSetTo(value);
    }
  } else if (currencyValueFrom === "UAH") {
    if (rateFrom > rateTo) {
      const price = rateFrom / rateTo;
      const result = Number(value) / price;
      fnSetTo(value);
      fnSetFrom(result);
    } else if (rateFrom < rateTo) {
      const price = rateTo / rateFrom;
      const result = Number(value) * price;
      fnSetFrom(result);
      fnSetTo(value);
    }
  }
}
export { convertValueFrom, convertValueTo };
