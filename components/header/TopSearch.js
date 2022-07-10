import React from "react";
import {
  TopSearchContainer,
  SettingContainer,
  Logo,
  SearchBox,
} from "./Header.styled";

const TopSearch = ({ handleThemeMode }) => {
  return (
    <TopSearchContainer>
      <Logo>google</Logo>
      <SearchBox>search</SearchBox>
      <SettingContainer onClick={handleThemeMode}>setting</SettingContainer>
    </TopSearchContainer>
  );
};

export default TopSearch;
