import React, { useEffect, useState } from "react";

import Scroll from "@/assets/images/scrollTop.svg?react";

import s from "./ScrollButton.module.scss";

export const ScrollButton = () => {
  const [isShow, setIsShow] = useState(false);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleShowScrollButton = () => {
    const shouldShow = window.pageYOffset > 200;
    setIsShow((prev) => (prev !== shouldShow ? shouldShow : prev));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShowScrollButton);

    return () => {
      window.removeEventListener("scroll", handleShowScrollButton);
    };
  }, []);

  return (
    isShow && (
      <div className={s.wrapper}>
        <button className={s.button} onClick={handleScroll}>
          <Scroll />
        </button>
      </div>
    )
  );
};
