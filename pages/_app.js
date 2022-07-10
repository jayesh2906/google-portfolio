import React from "react";
import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </React.Fragment>
  );
}
