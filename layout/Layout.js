import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header";
import NotFound from "../components/NotFound";
import { Container } from "./Layout.styled";

export const Layout = ({ children }) => {
  const [searchNotFound, setSearchNotFound] = useState(false);
  const [searchedValue, setSearchedValue] = useState("");
  const handleSearch = (searchValue) => {
    setSearchNotFound(
      searchValue.toLowerCase() !== "Jayesh Choudhary".toLowerCase()
    );
  };

  const setSearchValue = (searchValue) => {
    setSearchedValue(searchValue);
    setSearchNotFound(false);
  };

  return (
    <React.Fragment>
      <Container>
        <Header handleSearch={handleSearch} searchedValue={searchedValue} />
        {searchNotFound ? (
          <NotFound setSearchValue={setSearchValue} />
        ) : (
          <main>{children}</main>
        )}
      </Container>
      <Footer />
    </React.Fragment>
  );
};
