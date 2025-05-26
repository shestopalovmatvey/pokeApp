import React from "react";

import cn from "classnames";

import s from "./LoadingCard.module.scss";

export const LoadingCard = () => {
  return (
    <div className={s.card}>
      <div className={s.card__content}>
        <div>
          <p className={s.title}></p>
          <p className={cn(s.title, s.subtitle)}></p>
        </div>
        <div className={s.card__tags}>
          <div className={s.tag}></div>
          <div className={s.tag}></div>
          <div className={s.tag}></div>
          <div className={s.tag}></div>
        </div>
      </div>
      <div className={s.card__image}></div>
    </div>
  );
};
