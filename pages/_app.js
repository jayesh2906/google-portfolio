import React, { useState, createContext } from "react";
import { Layout } from "../layout/Layout";
import Theme from "../styles/Theme";

const ThemeContext = createContext();

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <React.Fragment>
      <ThemeContext.Provider value={{ darkMode, handleThemeMode }}>
        <Theme darkMode={darkMode}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Theme>
      </ThemeContext.Provider>
    </React.Fragment>
  );
}

export { ThemeContext };
