import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');

  :root {
    --border-light: 1px solid ${p => p.theme.color.light};
    --border-medium: 1px solid ${p => p.theme.color.grey.medium};
    --border-dark: 1px solid ${p => p.theme.color.grey.dark};
    --focus: var(--size-xs) solid ${p => p.theme.color.secondary.light};

  ${"" /* CSS variables for sizing (and spacing) */}
    --size-base: ${p => p.theme.size.base};
    --size-base-fixed: ${p => p.theme.size.base};
    --size-xxs: ${p => p.theme.size.xxs};
    --size-xs: ${p => p.theme.size.xs};
    --size-s: ${p => p.theme.size.s};
    --size-m: ${p => p.theme.size.m};
    --size-l: ${p => p.theme.size.l};
    --size-xl: ${p => p.theme.size.xl};

    --size-button: 2.5rem;
    --size-button-big: ${p => p.theme.size.xl};

    @media (max-width: ${p => p.theme.breakpoint.tabletPortrait}) {
      --size-base: calc(${p => p.theme.size.base} / 1.5);
      --size-xs: calc(${p => p.theme.size.xs} / 1.5);
      --size-s: calc(${p => p.theme.size.s} / 1.5);
      --size-m: calc(${p => p.theme.size.m} / 1.5);
      --size-l: calc(${p => p.theme.size.l} / 1.5);
      --size-xl: calc(${p => p.theme.size.xl} / 1.5);

      --size-button: 3rem;
      --size-button-big: 3rem;
    }
  }  

  html {
    scroll-behavior: smooth;
    font-size: 16px;

    @media (max-width: ${p => p.theme.breakpoint.tabletPortrait}) {
      font-size: 15px;
    }

    @media (min-width: ${p => p.theme.breakpoint.tabletPortrait}) {
      font-size: 16px;
    }

    @media (min-width: ${p => p.theme.breakpoint.desktopL}) {
      font-size: 15px;
    }

    @media (min-width: ${p => p.theme.breakpoint.desktopL}) {
      font-size: 16px;
    }

    @media (min-width: ${p => p.theme.breakpoint.desktopXXL}) {
      font-size: 24px;
    }
  }
  
  body {
    font-family: ${p => p.theme.font.sansSerif};
    font-size: 16px;
    color: ${p => p.theme.color.dark};

    @media (max-width: ${p => p.theme.breakpoint.tabletPortrait}) {
      font-size: 15px;
    }

    @media (min-width: ${p => p.theme.breakpoint.tabletPortrait}) {
      font-size: 16px;
    }

    @media (min-width: ${p => p.theme.breakpoint.desktopM}) {
      font-size: 15px;
    }

    @media (min-width: ${p => p.theme.breakpoint.desktopL}) {
      font-size: 16px;
    }

    @media (min-width: ${p => p.theme.breakpoint.desktopXXL}) {
      font-size: 24px;
    }
  }

  #root {
  }
`;

export default GlobalStyle;
