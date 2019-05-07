import React from "react";
import styled from "styled-components";
import {
  faUser,
  faHeart,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

import { Logo, ButtonMixedVertical } from "components/elements";
import { SearchBox } from "components/compositions";
import { InnerWidth } from "components/layouts";

const S = {};

S.Header = styled.header`
  color: ${p => p.theme.color.light};
`;

S.InnerWidth = styled(InnerWidth)`
  display: grid;
  grid-template-areas: "logo search-box buttons";
  grid-template-columns: auto 1fr auto;
  align-items: center;
  grid-column-gap: var(--size-base);
  grid-row-gap: var(--size-m);

  @media (max-width: ${p => p.theme.breakpoint.desktopM}) {
    grid-template-areas:
      "logo buttons"
      "search-box search-box";
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
  }

  @media (max-width: ${p => p.theme.breakpoint.tabletLandscape}) {
    grid-template-areas:
      "logo"
      "buttons"
      "search-box";
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    justify-items: center;
  }
`;

S.Logo = styled(Logo)`
  grid-area: logo;
`;

S.SearchBox = styled(SearchBox)`
  grid-area: search-box;
`;

S.ButtonMixedVerticalWrapper = styled.div`
  grid-area: buttons;
  display: flex;

  @media (max-width: ${p => p.theme.breakpoint.desktopM}) {
    width: 100%;
  }

  & > * {
    width: ${p => p.theme.incrementFixed(3)};

    @media (max-width: ${p => p.theme.breakpoint.desktopM}) {
      width: unset;
      flex-grow: 1;
    }
  }
`;

const Header = props => {
  return (
    <S.Header {...props}>
      <S.InnerWidth>
        <S.Logo />

        <S.SearchBox />

        <S.ButtonMixedVerticalWrapper>
          <ButtonMixedVertical icon={faUser} dark>Account</ButtonMixedVertical>
          <ButtonMixedVertical icon={faHeart} dark>Wishlist</ButtonMixedVertical>
          <ButtonMixedVertical icon={faShoppingCart} dark>Cart</ButtonMixedVertical>
        </S.ButtonMixedVerticalWrapper>
      </S.InnerWidth>
    </S.Header>
  );
};

export default Header;
