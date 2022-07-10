import NavBar from "./NavBar";
import TopSearch from "./TopSearch";
import { HeaderContainer } from "./Header.styled";

const Header = ({ handleThemeMode }) => {
  return (
    <HeaderContainer>
      <TopSearch handleThemeMode={handleThemeMode} />
      <NavBar />
    </HeaderContainer>
  );
};

export default Header;
