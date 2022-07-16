import styled from "styled-components";

export const RelatedSearchContainer = styled.main`
  margin: 4.5rem 0;
`;

export const SearchWrapper = styled.main`
  padding: 1.5rem 0;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 2rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: auto;
  }
`;

export const SearchItem = styled.main`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  background: ${({ darkMode }) => (darkMode ? "#303134" : "#f1f3f4")};
  border: 1px solid rgba(255, 255, 255, 0);
  cursor: pointer;
  border-radius: 2rem;
  padding: 1rem 2rem;
  &:hover {
    background: ${({ darkMode }) => (darkMode ? "#3c4043" : "#d8d7dc")};
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 90%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const SearchText = styled.main`
  span {
    font-weight: 600;
  }
  &:hover {
    text-decoration: underline;
  }
`;
