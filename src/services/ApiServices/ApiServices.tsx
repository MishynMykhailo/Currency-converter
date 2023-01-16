import axios from "axios";

const monobankApi = axios.create({
  baseURL: "https://api.monobank.ua",
  method: "GET",
});
const NbuApi = axios.create({
  baseURL: "https://bank.gov.ua",
  method: "GET",
});

async function monobankData() {
  try {
    const { data } = await monobankApi.get("/bank/currency");
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
async function NbuDataCash() {
  try {
    const { data } = await NbuApi.get(
      "/NBUStatService/v1/statdirectory/exchange?json"
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export { monobankData, NbuDataCash };
