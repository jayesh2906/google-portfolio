import styled from "styled-components";

export const SkillContainer = styled.main`
  margin-top: 2rem;
  padding: 0 calc(92px + 5rem + 2rem);
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0px;
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
    background: ${({ theme }) => theme.colors.contentBackground};
    border-radius: 2rem;
    &:hover {
      background: ${({ theme }) => theme.colors.contentHover};
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
