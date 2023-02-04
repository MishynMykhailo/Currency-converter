import React from "react";
import s from "./Header.module.css";
import { EURSvg, USDSvg } from "../../images/country";
interface IProps {
  nbuCurrency: { r030: string; cc: string; rate: number }[];
}

const Header: React.FC<IProps> = ({ nbuCurrency }) => {
  return (
    <header className={s.header}>
      <a className={s.logoLink} href="/">
        <h1 className={s.logoText}>Conveter</h1>
      </a>
      <ul className={s.ul}>
        {nbuCurrency &&
          nbuCurrency.map(
            (item: { r030: string; cc: string; rate: number }) => {
              return (
                <li className={s.li} key={item.r030}>
                  {item.cc === "EUR" ? (
                    <>
                      <EURSvg width={30} height={20} />
                      <p className={s.p}>{item.cc}</p>
                    </>
                  ) : (
                    <>
                      <USDSvg width={30} height={20} />
                      <p className={s.p}>{item.cc}</p>
                    </>
                  )}

                  <p className={s.p}>{item.rate.toFixed(2)}</p>
                </li>
              );
            }
          )}
      </ul>
    </header>
  );
};

export default Header;
