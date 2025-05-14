import React, { FC } from "react";

import cn from "classnames";

import s from "./Tags.module.scss";

interface TagsProps {
  text: string;
  color: string;
  classes?: string;
  onClick?: () => void;
}

export const Tags: FC<TagsProps> = ({ text, color, classes, onClick }) => {
  return (
    <div
      className={cn(s.container, classes)}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
