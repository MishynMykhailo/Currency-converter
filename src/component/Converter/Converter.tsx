import React, { useState } from "react";
import s from "./Converter.module.css";

const Converter: React.FC = () => {
  const [currentValue, setCurrentValue] = useState("");
  function onSelectHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    setCurrentValue(e.target.value);
  }
  function convertValue() {}
  convertValue();
  console.log(currentValue);
  return (
    <section className={s.section}>
      <div className={s.div}>
        <select onChange={(e) => onSelectHandler(e)}>
          <option value="null">Select value</option>
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <input type="text" />
      </div>
    </section>
  );
};

export default Converter;
