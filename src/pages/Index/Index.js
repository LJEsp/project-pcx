import React from "react";
import styled from "styled-components";

import { Header, TopBar, NavBar } from "components/blocks";
import {
  SlideShowBackground,
  SlideShowContent,
  slideShowData,
  useSlideShow
} from "components/blocks/SlideShow";

const S = {};

S.Index = styled.div`
  .index-aboveTheFold {
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;

    @media (max-width: ${p => p.theme.breakpoint.tabletPortrait}) {
      height: auto;
    }
  }
`;

S.TopBar = styled(TopBar)`
  margin-bottom: var(--size-base);
`;

S.Header = styled(Header)`
  margin-bottom: var(--size-base);
`;

S.NavBar = styled(NavBar)`
  margin-bottom: var(--size-xl);
  z-index: 1;
`;

S.SlideShowBackground = styled(SlideShowBackground)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
`;

S.SlideShowContent = styled(SlideShowContent)`
  color: ${p => p.theme.color.light};
  flex-grow: 1;

  @media (max-width: ${p => p.theme.breakpoint.desktopM}) {
    margin-top: var(--size-l);
  }
`;

const Index = () => {
  const slideShowHook = useSlideShow(slideShowData);

  return (
    <S.Index>
      <div className="index-aboveTheFold">
        <S.TopBar />
        <S.Header />
        <S.NavBar />

        <S.SlideShowContent {...slideShowHook} />
      </div>

      <S.SlideShowBackground {...slideShowHook} />
    </S.Index>
  );
};

export default Index;
