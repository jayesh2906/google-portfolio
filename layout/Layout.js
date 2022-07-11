import Footer from "../components/footer/Footer";
import Header from "../components/header";
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
