import React from "react";
import styled, { css } from "styled-components";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faMicrosoft
} from "@fortawesome/free-brands-svg-icons";

import { ButtonMixedHorizontal } from "components/elements";
import { ComplexMenu } from "components/compounds";
import {
  useWideMenu,
  WideMenuButton,
  WideMenuContainer
} from "components/compounds/WideMenu";
import { InnerWidth } from "components/layouts";
import NewsWideMenuContainer from "./components/NewsWideMenuContainer";
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

const wideMenu = css`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  height: 50vh;
  border-bottom: var(--size-xxs) solid ${p => p.theme.color.secondary.main};
`;

S.WideMenuContainer = styled(WideMenuContainer)`
  ${wideMenu};
`;

S.NewsWideMenuContainer = styled(NewsWideMenuContainer)`
  ${wideMenu}
`;

const NavBar = props => {
  const newsAndPromosWideMenu = useWideMenu();
  const microsoftWideMenu = useWideMenu();

  return (
    <S.NavBar {...props}>
      <S.InnerWidth>
        <S.LeftWrapper>
          <ComplexMenu label="Browse Categories" menu={categoriesMenu} />

          <WideMenuButton
            icon={faTags}
            variant="light"
            {...newsAndPromosWideMenu}
          >
            News and Promos
          </WideMenuButton>

          <WideMenuButton
            icon={faMicrosoft}
            variant="light"
            {...microsoftWideMenu}
          >
            Microsoft
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

        <S.NewsWideMenuContainer {...newsAndPromosWideMenu} />

        <S.WideMenuContainer {...microsoftWideMenu} />
      </S.InnerWidth>
    </S.NavBar>
  );
};

export default NavBar;
