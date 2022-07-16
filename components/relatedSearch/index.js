import { useContext } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { relatedsearch } from "../../constants/constants";
import { ThemeContext } from "../../pages/_app";
import {
  Heading,
  VideosHeadingWrapper,
} from "../projectVideos/ProjectVideos.styled";
import {
  RelatedSearchContainer,
  SearchWrapper,
  SearchItem,
  SearchText,
} from "./RelatedSearch.styled";
import { useRouter } from "next/router";

const RelatedSearch = () => {
  const { darkMode } = useContext(ThemeContext);
  const router = useRouter();

  return (
    <RelatedSearchContainer>
      <VideosHeadingWrapper
        style={{
          color: darkMode ? "#ddd" : "#202124",
          borderColor: darkMode ? "#3c4043" : "#ebebeb",
        }}
      >
        <Heading>Related Search</Heading>
        <BiDotsVerticalRounded size={20} />
      </VideosHeadingWrapper>
      <SearchWrapper>
        {relatedsearch.map(({ text, href }, index) => {
          return (
            <SearchItem
              key={text}
              darkMode={darkMode}
              onClick={() => {
                router.push(href);
              }}
            >
              <AiOutlineSearch size={20} />
              {index !== 2 ? (
                <SearchText>
                  {text.split(" ")[0]} <span>{text.split(" ")[1]}</span>
                </SearchText>
              ) : (
                <SearchText>
                  <span>{text.split(" ")[0]}</span> {text.split(" ")[1]}
                </SearchText>
              )}
            </SearchItem>
          );
        })}
      </SearchWrapper>
    </RelatedSearchContainer>
  );
};

export default RelatedSearch;
