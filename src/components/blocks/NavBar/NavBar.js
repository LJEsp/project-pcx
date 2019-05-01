import React from "react";
import styled from "styled-components";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faMicrosoft
} from "@fortawesome/free-brands-svg-icons";

import { ButtonMixedHorizontal } from "components/elements";
import { ComplexMenu, NewsCard } from "components/compounds";
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

  height: 50vh;
  display: flex;
  padding: var(--size-base);

  & > *:not(:last-child) {
    margin-right: var(--size-base);
  }

  & > * {
    flex: 1;
  }
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

        <S.WideMenuContainer {...newsAndPromosWideMenu}>
          <NewsCard
            caption="Promotion"
            label="INNO3D GTX 1660 Ti + Intel Core i5-9400F Bundle Promo"
            photoSrc="https://i2.wp.com/pcx.com.ph/wp-content/uploads/2019/04/3-Promo-Page-Header-1357-x-768-3-2.jpg?resize=1024%2C580&ssl=1"
          />
          <NewsCard
            caption="Promotion"
            label="Lenovo Double the Fun Tablet Bundle"
            photoSrc="https://i2.wp.com/pcx.com.ph/wp-content/uploads/2019/04/3-Promo-Page-Header-1357-x-768-4-1.jpg?resize=1024%2C580&ssl=1"
          />
          <NewsCard
            caption="Promotion"
            label="PCX LAPTOP AND PRINTER BUNDLE PROMO"
            photoSrc="https://i2.wp.com/pcx.com.ph/wp-content/uploads/2019/02/3-Promo-Page-Header-1357-x-768-1.jpg?resize=1024%2C580&ssl=1"
          />
          <NewsCard />
        </S.WideMenuContainer>

        <S.WideMenuContainer {...microsoftWideMenu} />
      </S.InnerWidth>
    </S.NavBar>
  );
};

export default NavBar;
