import React, { createContext, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header";
import NotFound from "../components/NotFound";
import { Container } from "./Layout.styled";

const SearchContext = createContext();

export const Layout = ({ children }) => {
  const [searchNotFound, setSearchNotFound] = useState(false);
  const [searchValueChange, setSearchValueChange] = useState(false);

  const handleSearch = (searchValue) => {
    setSearchValueChange(false);
    setSearchNotFound(
      searchValue.toLowerCase().trim() !== "Jayesh Choudhary".toLowerCase()
    );
  };

  const handleClickHere = () => {
    setSearchValueChange(true);
    setSearchNotFound(false);
  };

  return (
    <React.Fragment>
      <SearchContext.Provider
        value={{ searchValueChange, handleSearch, handleClickHere }}
      >
        <Container>
          <Header />
          {searchNotFound ? <NotFound /> : <main>{children}</main>}
        </Container>
      </SearchContext.Provider>
      <Footer />
    </React.Fragment>
  );
};

export { SearchContext };
