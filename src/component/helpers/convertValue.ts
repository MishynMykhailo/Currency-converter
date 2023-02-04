function fixedResult(data: number, digits: number): number {
  return Number(data.toFixed(digits));
}
function convertValueFrom(
  value: number,
  currencyValueFrom: string,
  currencyValueTo: string,
  rateFrom: number,
  rateTo: number,
  fnSetFrom: (arg: number) => void,
  fnSetTo: (arg2: number) => void
): void {
  console.log("from");
  if (currencyValueFrom === currencyValueTo) {
    fnSetFrom(Number(value));
    fnSetTo(Number(value));
  } else if (
    currencyValueFrom === "USD" ||
    currencyValueFrom === "EUR" ||
    currencyValueFrom === "UAH"
  ) {
    if (rateFrom > rateTo) {
      const price = rateFrom / rateTo;
      const result = Number(value) * price;
      fnSetFrom(fixedResult(value, 3));
      fnSetTo(fixedResult(result, 3));
    } else if (rateFrom < rateTo) {
      const price = rateTo / rateFrom;
      const result = Number(value) / price;
      fnSetFrom(fixedResult(value, 3));
      fnSetTo(fixedResult(result, 3));
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
  console.log("To");
  if (currencyValueTo === currencyValueFrom) {
    fnSetFrom(Number(value));
    fnSetTo(Number(value));
  } else if (
    currencyValueFrom === "USD" ||
    currencyValueFrom === "EUR" ||
    currencyValueFrom === "UAH"
  ) {
    if (rateFrom > rateTo) {
      const price = rateFrom / rateTo;
      const result = Number(value / price);
      fnSetFrom(fixedResult(result, 3));
      fnSetTo(fixedResult(value, 3));
    } else if (rateFrom < rateTo) {
      const price = rateTo / rateFrom;
      const result = Number(value * price);
      fnSetFrom(fixedResult(result, 3));
      fnSetTo(fixedResult(value, 3));
    }
  }
}
export { convertValueFrom, convertValueTo };
