import Footer from "../components/footer/Footer";
import Header from "../components/header";
import { Container } from "./Layout.styled";

export const Layout = ({ handleThemeMode, children }) => {
  return (
    <Container>
      <Header handleThemeMode={handleThemeMode} />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
