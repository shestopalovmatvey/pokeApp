import { MainHeader } from "@/components/MainHeader";
import { Page } from "@/components/Page";
import { ListOfPokemons } from "@/widgets/ListOfPokemons";
import { ListOfTags } from "@/widgets/ListOfTags/ui/ListOfTags";

import s from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <Page classes={s.wrapper}>
      <MainHeader isShowText />
      <ListOfTags />
      <ListOfPokemons />
    </Page>
  );
};
