const theme = {
  breakpoint: {
    phone: "0em",
    tabletPortrait: "37.5em", // 600px
    tabletLandscape: "56.25em", // 900px
    desktopM: "75em", // 1200px
    desktopL: "93.75em", // 1500px
    desktopXL: "112.5em", // 1800px
    desktopXXL: "125em" // 2000px
  },
  font: {
    sansSerif: "Open Sans, sans-serif",
    scale: {
      small: "0.875em", // 14px
      base: "1em", // 16px
      body: "1.1875em", // 19px
      display4: "1.1875em", // 24px
      display3: "1.5em", // 24px
      display2: "2em", // 32px
      display1: "3.875em" // 62px
    },
    lineHeight: 1.5
  },
  color: {
    primary: {
      main: "#D22630",
      light: "#DE2831",
      dark: "#911A20"
    },
    secondary: {
      main: "#003DA5",
      light: "#0059F2",
      dark: "#002566"
    },
    light: "#FAFAFA",
    lightFixed: "#FAFAFA",
    dark: "#212121",
    white: "#FFFFFF",
    black: "#000000",
    grey: {
      light: "#F5F5F5",
      lightHover: "#E0E0E0",
      medium: "#BDBDBD",
      dark: "#424242"
    },
    palette: {
      red: "#F44336",
      pink: "#E91E63",
      purple: "#9C27B0",
      deepPurple: "#673AB7",
      indigo: "#3F51B5",
      blue: "#2196F3",
      lightBlue: "#03A9F4",
      cyan: "#00BCD4",
      teal: "#009688",
      green: "#4CAF50",
      lightGreen: "#8BC34A",
      lime: "#CDDC39",
      yellow: "#FFEB3B",
      amber: "#FFC107",
      orange: "#FF9800",
      deepOrange: "#F4511E",
      brown: "#795548",
      grey: "#9E9E9E",
      blueGray: "#607D8B"
    }
  },
  size: {
    xxs: "0.125rem", // 2px
    xs: "0.25rem", // 4px
    s: "0.5rem", // 8px
    m: "1rem", // 16px
    l: "2rem", // 32px
    xl: "4rem", // 64px
    base: "1.5rem", // 24px
    baseHalf: "0.75rem" // 12px
  },
  shadow: [
    "0 0.0625em 0.1875em rgba(0,0,0,0.12), 0 0.0625em 0.125em rgba(0,0,0,0.16)",
    "0 0.1875em 0.375em rgba(0,0,0,0.16), 0 0.1875em 0.375em rgba(0,0,0,0.16)",
    "0 0.625em 1.25em rgba(0,0,0,0.19), 0 0.375em 0.375em rgba(0,0,0,0.16)",
    "0 0.875em 1.75em rgba(0,0,0,0.25), 0 0.625em 0.625em rgba(0,0,0,0.16)",
    "0 1.1875em 2.375em rgba(0,0,0,0.30), 0 0.9375em 0.75em rgba(0,0,0,0.16)"
  ],
  increment: increment => `calc(${increment} * var(--size-base))`,
  incrementFixed: increment => `calc(${increment} * var(--size-base-fixed))`
};

export default theme;
