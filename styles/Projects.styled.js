import styled from "styled-components";

export const ProjectContainer = styled.main`
  margin-top: 2rem;
  padding: 0 calc(92px + 5rem + 2rem);
  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 0 calc(92px);
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0px;
  }
`;

export const ProjectsGrid = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  padding: 0.8rem 0;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 98%;
    margin: auto;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    width: 100%;
    row-gap: 3.5rem;
  }
`;

export const ProjectItem = styled.div`
  filter: drop-shadow(0 ${({ darkMode }) => (darkMode ? "2px" : "4px")} 3px)
    drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  transition: 500ms all;
  padding: 1.5rem 0;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.contentBackground};
  @media (hover: hover) {
    &:hover {
      background: ${({ theme }) => theme.colors.contentHover};
    }
    &:hover {
      transform: scale(105%);
    }
  }
  color: ${({ theme }) => theme.colors.headingColor};

  & > h3 {
    text-align: center;
    font-weight: 500;
    padding: 0 0.5rem;
    font-size: 2.2rem;
    color: ${({ theme }) => theme.colors.headingColor};
  }

  & > ul {
    padding: 0 2.3rem;

    & > li {
      list-style-type: square;
      line-height: 1.9rem;
      margin-top: 0.3rem;

      &::marker {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const ButtonGroups = styled.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.3rem;
  justify-content: space-around;

  & > a {
    display: inline-block;
    background: ${({ theme }) => theme.colors.contentHover};
    color: ${({ theme }) => theme.colors.headingColor};
    font-size: 1.8rem;
    font-weight: 500;
    border: 2px solid ${({ theme }) => theme.colors.contentHover};
    padding: 0.6rem 0.8rem;
    margin: 0 0.5rem;
    margin-top: 1rem;
    border-radius: 1.2rem;
    transition: all 0.5s ease;
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
      border: 2px solid ${({ theme }) => theme.colors.secondary};
    }
  }
`;
