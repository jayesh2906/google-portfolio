import NavBar from "./NavBar";
import TopSearch from "./TopSearch";
import { HeaderContainer } from "./Header.styled";
import { useContext } from "react";
import { ThemeContext } from "../../pages/_app";

const Header = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <HeaderContainer style={{ borderColor: darkMode ? "#3c4043" : "#ebebeb" }}>
      <TopSearch />
      <NavBar />
    </HeaderContainer>
  );
};

export default Header;
