import React from "react";
import styled from "styled-components";
import {
  faUser,
  faHeart,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

import { Logo, ButtonCombination } from "components/elements";
import { SearchBox } from "components/blocks";

const S = {};

S.Header = styled.header`
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
    /* justify-items: center; */
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

S.ButtonCombinationWrapper = styled.div`
  grid-area: buttons;
  display: flex;

  @media (max-width: ${p => p.theme.breakpoint.desktopM}) {
    width: 100%;
    border-bottom: 2px solid ${p => p.theme.color.grey.medium};
  }

  * {
    width: ${p => p.theme.incrementFixed(3)};

    @media (max-width: ${p => p.theme.breakpoint.desktopM}) {
      width: unset;
      flex-grow: 1;
    }
  }
`;

const Header = props => {
  return (
    <S.Header>
      <S.Logo />

      <S.SearchBox />

      <S.ButtonCombinationWrapper>
        <ButtonCombination icon={faUser} label="Account" />
        <ButtonCombination icon={faHeart} label="Wishlist" />
        <ButtonCombination icon={faShoppingCart} label="Cart" />
      </S.ButtonCombinationWrapper>
    </S.Header>
  );
};

export default Header;
