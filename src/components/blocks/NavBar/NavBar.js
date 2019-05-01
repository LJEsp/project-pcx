import React from "react";
import styled from "styled-components";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

import { ButtonMixedHorizontal } from "components/elements";
import { ComplexMenu } from "components/compounds";
import {
  useWideMenu,
  WideMenuButton,
  WideMenuContainer
} from "components/compounds/WideMenu";
import { InnerWidth } from "components/layouts";
import categoriesMenu from "./categoriesMenu";

const S = {};

S.NavBar = styled.div``;

S.InnerWidth = styled(InnerWidth)`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

S.LeftWrapper = styled.div`
  display: flex;
`;

S.RightWrapper = styled.div`
  display: flex;
`;

S.WideMenuContainer = styled(WideMenuContainer)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
`;

const NavBar = props => {
  const newsAndPromosWideMenu = useWideMenu();

  return (
    <S.NavBar {...props}>
      <S.InnerWidth>
        <S.LeftWrapper>
          <ComplexMenu label="Browse Categories" menu={categoriesMenu} />

          <WideMenuButton icon={faTags} variant="light" {...newsAndPromosWideMenu}>
            News and Promos
          </WideMenuButton>
        </S.LeftWrapper>

        <S.RightWrapper>
          <ButtonMixedHorizontal
            variant="light"
            icon={faFacebook}
            iconSize="lg"
            size="big"
          >
            PCXGC
          </ButtonMixedHorizontal>

          <ButtonMixedHorizontal
            variant="light"
            icon={faYoutube}
            iconSize="lg"
            size="big"
          >
            PCXTV
          </ButtonMixedHorizontal>
        </S.RightWrapper>

        <S.WideMenuContainer {...newsAndPromosWideMenu} />
      </S.InnerWidth>
    </S.NavBar>
  );
};

export default NavBar;
