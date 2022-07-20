import NavBar from "./NavBar";
import TopSearch from "./TopSearch";
import { HeaderContainer } from "./Header.styled";

const Header = ({ handleSearch, searchedValue }) => {
  return (
    <HeaderContainer>
      <TopSearch handleSearch={handleSearch} searchedValue={searchedValue} />
      <NavBar />
    </HeaderContainer>
  );
};

export default Header;
