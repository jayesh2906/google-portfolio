import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Global.styled";

const getTheme = (darkMode) => ({
  fontFamily: "arial,sans-serif",
  colors: {
    primary: darkMode ? "#BCC0C3" : "#4D5156",
    secondary: darkMode ? "#79B4F8" : "#1A0DAB",
    background: darkMode ? "#202124" : "#FFFFFF",
  },
  breakpoints: {
    sm: "screen and (max-width: 556px)",
    md: "screen and (max-width: 854px)",
    lg: "screen and (max-width: 1024px)",
    xl: "screen and (max-width: 1280px)",
  },
});

const Theme = ({ darkMode, children }) => (
  <ThemeProvider theme={getTheme(darkMode)}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
