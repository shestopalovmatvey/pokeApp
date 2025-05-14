import { FC, ReactNode } from "react";

import cn from "classnames";

import { ScrollButton } from "@/components/ScrollButton";

import s from "./Page.module.scss";

interface PageProps {
  children: ReactNode;
  classes?: string;
}

export const Page: FC<PageProps> = ({ children, classes }) => {
  return (
    <div className={cn(s.page, classes)}>
      {children}
      <ScrollButton />
    </div>
  );
};
