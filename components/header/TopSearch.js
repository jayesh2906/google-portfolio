import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../pages/_app";
import { FiSun } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";

import {
  TopSearchContainer,
  SettingContainer,
  Logo,
  SearchBox,
  SearchInput,
  Profile,
  AccountDetails,
} from "./Header.styled";
import { accountDetails } from "../../constants/constants";
import { SearchContext } from "../../layout/Layout";

const TopSearch = () => {
  const { darkMode, handleThemeMode } = useContext(ThemeContext);
  const [search, setSearch] = useState("Jayesh Choudhary");
  const [showDetails, setShowDetails] = useState(false);
  const { searchValueChange, handleSearch } = useContext(SearchContext);

  useEffect(() => {
    if (searchValueChange) {
      setSearch("Jayesh Choudhary");
    }
  }, [searchValueChange]);

  const CloseIcon = () => {
    return (
      <span style={{ cursor: "pointer" }} onClick={() => setSearch("")}>
        <svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            fill="#70757a"
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          ></path>
        </svg>
      </span>
    );
  };

  const SearchIcon = () => {
    return (
      <span
        style={{ cursor: "pointer" }}
        onClick={() => {
          handleSearch(search);
        }}
      >
        <svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            fill="#4285f4"
            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          ></path>
        </svg>
      </span>
    );
  };

  return (
    <TopSearchContainer>
      <Logo>
        {!darkMode ? (
          <Image src="/assets/logoDark.png" alt="Logo" width={92} height={30} />
        ) : (
          <Image
            src="/assets/logoLight.png"
            alt="Logo"
            width={92}
            height={30}
          />
        )}
      </Logo>
      <SearchBox darkMode={darkMode}>
        <SearchInput
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <CloseIcon />
        <SearchIcon />
      </SearchBox>
      <SettingContainer>
        <div onClick={handleThemeMode} style={{ cursor: "pointer" }}>
          {darkMode ? <BsMoonStars size={23} /> : <FiSun size={22} />}
        </div>
        <Profile
          onMouseOver={() => setShowDetails(true)}
          onMouseOut={() => setShowDetails(false)}
        >
          J
          {showDetails && (
            <AccountDetails>
              <h5>{accountDetails.account}</h5>
              <p>{accountDetails.name}</p>
              <p>{accountDetails.gmail}</p>
            </AccountDetails>
          )}
        </Profile>
      </SettingContainer>
    </TopSearchContainer>
  );
};

export default TopSearch;
