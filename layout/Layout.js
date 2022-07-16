import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header";
import { Container } from "./Layout.styled";

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <main>{children}</main>
      </Container>
      <Footer />
    </React.Fragment>
  );
};
