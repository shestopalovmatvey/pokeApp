import { FC } from "react";

import MainLogo from "@/assets/images/logo-main.svg?react";

import s from "./MainHeader.module.scss";

interface MainHeaderProps {
  isShowText?: boolean;
}

export const MainHeader: FC<MainHeaderProps> = ({ isShowText }) => {
  return (
    <div className={s.header}>
      <div className={s.header__container}>
        <MainLogo className={s.logo} />
      </div>

      {isShowText && (
        <div className={s.header__content}>
          <h2 className={s.header__title}>Pokedex</h2>
          <p className={s.header__subtitle}>
            Здесь покемоны Галар собраны в одном месте. Сделано с любовью и
            почтением.
          </p>
        </div>
      )}
    </div>
  );
};
