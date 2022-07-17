import styled from "styled-components";

export const SkillContainer = styled.main`
  margin-top: 2rem;
  padding: 0 calc(92px + 5rem + 2rem);
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0px;
  }
  & > p {
    line-height: 2rem;
  }
`;

export const SkillOverview = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;

  & > div {
    flex-basis: 48%;
    padding: 1.5rem;
    text-align: center;
    transition: 500ms all;
    background: ${({ theme }) => theme.colors.contentBackground};
    border-radius: 2rem;
    &:hover {
      background: ${({ theme }) => theme.colors.contentHover};
    }
    @media ${(props) => props.theme.breakpoints.lg} {
      flex-basis: 100%;
    }
    @media ${(props) => props.theme.breakpoints.md} {
      flex-basis: 48%;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
      flex-basis: 100%;
      border-radius: 1.5rem;
    }

    & > h3 {
      font-weight: 500;
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.headingColor};
      margin-bottom: 0.5rem;
    }

    & > p {
      font-weight: 600;
      line-height: 2rem;
      padding: 0, 0.5rem;
      padding-top: 0.5rem;
    }
  }
`;

export const SkillsGrid = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;
  padding: 0.8rem 0;
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 98%;
    margin: auto;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SkillItem = styled.a`
  display: block;
  filter: drop-shadow(0 4px 3px ${({ shadowColor }) => shadowColor})
    drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  transition: 500ms all;
  padding: 0.8rem 0;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.contentBackground};
  &:hover {
    background: ${({ theme }) => theme.colors.contentHover};
  }
  color: ${({ theme }) => theme.colors.headingColor};

  &:hover {
    transform: scale(105%);
  }

  & > p {
    font-weight: 600;
    margin-top: 0.8rem;
  }
`;
