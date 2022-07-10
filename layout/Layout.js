import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Container } from "./Layout.styled";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
