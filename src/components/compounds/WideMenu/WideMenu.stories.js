import React from "react";
import { storiesOf } from "@storybook/react";

import WideMenuContainer from "./WideMenuContainer";
import WideMenuButton from "./WideMenuButton";
import useWideMenu from "./useWideMenu";

const WideMenu = () => {
  const myWideMenu = useWideMenu();

  return (
    <>
      <WideMenuButton variant="primary" {...myWideMenu}>WideMenuButton</WideMenuButton>
      <WideMenuContainer {...myWideMenu}>WideMenuContainer</WideMenuContainer>
    </>
  );
};

storiesOf("Components|Compounds/WideMenu", module).add("WideMenu", () => (
  <WideMenu />
));

storiesOf("Components|Compounds/WideMenu", module).add("WideMenuButton", () => (
  <WideMenuButton />
));
