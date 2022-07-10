import React, { useState } from "react";
import { Layout } from "../layout/Layout";
import Theme from "../styles/Theme";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <React.Fragment>
      <Theme darkMode={darkMode}>
        <button onClick={handleThemeMode}>logo</button>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </React.Fragment>
  );
}
