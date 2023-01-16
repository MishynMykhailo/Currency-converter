import React, { useState, useEffect } from "react";
import {
  monobankData,
  NbuDataCash,
} from "../../services/ApiServices/ApiServices";
import s from "./Header.module.css";

const Header: React.FC = () => {
  const [nbuCurrency, setNbuCurrency] = useState([]);
  useEffect(() => {
    NbuDataCash().then((data) => {
      setNbuCurrency(
        data.filter((item: { r030: number }) => {
          return item.r030 === 840 || item.r030 === 978;
        })
      );
    });
  }, []);
  console.log(nbuCurrency);
  return (
    <header className={s.header}>
      {/* <nav className={s.nav}>
        <ul className={s.ul}>
          <li className={s.li}>s</li>
          <li className={s.li}>s</li>
        </ul>
      </nav> */}
      <div>
        {nbuCurrency &&
          nbuCurrency.map(
            (item: { r030: number; txt: string; rate: number; cc: string }) => {
              return (
                <>
                  <li>{}</li>
                </>
              );
            }
          )}
      </div>
    </header>
  );
};

export default Header;
