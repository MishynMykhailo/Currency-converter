import React from "react";
import s from "../SelectComponent/SelectComponent.module.css";
interface IProps {
  name: string;
  arrayCurrency: string[];
  selectHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputState: number;
}

const SelectComponent: React.FC<IProps> = ({
  name,
  arrayCurrency,
  selectHandler,
  inputHandler,
  inputState,
}) => {
  return (
    <div className={s.div}>
      <select
        className={s.select}
        name={name}
        onChange={(e) => selectHandler(e)}
      >
        {arrayCurrency.map((name) => {
          return (
            <option key={name} value={name}>
              {name}
            </option>
          );
        })}
      </select>
      <label className={s.label}>
        <input
          className={s.input}
          value={inputState}
          type="number"
          name={name}
          placeholder=" "
          onChange={(e) => inputHandler(e)}
        />
      </label>
    </div>
  );
};

export default SelectComponent;
