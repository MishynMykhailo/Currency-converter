import React from "react";
import s from "../ConvertSection/ConvertSection.module.css";
import SelectComponent from "../SelectComponent/SelectComponent";

interface IProps {
  onSelectHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  stateInputFrom: number;
  stateInputTo: number;
}
const ConvertSection: React.FC<IProps> = ({
  onSelectHandler,
  onInputHandler,
  stateInputFrom,
  stateInputTo,
}) => {
  const currentCurrency = ["UAH", "USD", "EUR"];

  return (
    <section className={s.section}>
      <div className={s.div}>
        <SelectComponent
          name="from"
          arrayCurrency={currentCurrency}
          selectHandler={onSelectHandler}
          inputHandler={onInputHandler}
          inputState={stateInputFrom}
        />
      </div>
      <div className={s.div}>
        <SelectComponent
          name="to"
          arrayCurrency={currentCurrency}
          selectHandler={onSelectHandler}
          inputHandler={onInputHandler}
          inputState={stateInputTo}
        />
      </div>
    </section>
  );
};

export default ConvertSection;
