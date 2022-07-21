import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: calc(92px + 5rem + 2rem);
  @media ${(props) => props.theme.breakpoints.md} {
    padding-left: 0px;
  }
`;

export const InfoContainer = styled.section`
  flex-basis: 50%;
  padding-top: 2rem;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-basis: 55%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-basis: 100%;
  }
  & > span {
    display: none;
    @media ${(props) => props.theme.breakpoints.sm} {
      display: block;
    }
  }
`;

export const Heading = styled.h2`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.secondary};
  display: block;
  width: fit-content;
  color: ${({ theme }) => theme.colors.secondary};
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const MobileHeading = styled(Heading)`
  width: fit-content;
  display: none;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
  }
`;

export const Text = styled.p`
  line-height: 2rem;
`;

export const WorkExperience = styled.div`
  padding: 1.5rem 1.5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.3rem 0;
  }
  line-height: 2rem;

  & > strong {
    font-size: 1.7rem;
  }
`;

export const ProjectList = styled.ul`
  li {
    margin: 0.8rem 0;
  }
`;

export const Company = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.2rem;

  i {
    font-size: 1.4rem;
  }
`;

export const MobileProfile = styled.div`
  width: 100%;
  margin: 1rem auto;
  display: grid;
  place-items: center;
  display: none;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    display: grid;
  }
`;

export const AsideContainer = styled.aside`
  flex-basis: 35%;
  margin-right: 5rem;
  margin-top: 2rem;
  border-top-right-radius: 1.5rem;
  border-top-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  border: 2px solid #ebebeb;
  overflow: hidden;
  @media ${(props) => props.theme.breakpoints.md} {
    margin-right: 0rem;
    flex-basis: 40%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
  border-color: ${({ theme }) => theme.colors.borderColor};

  hr {
    margin: 0 1rem;
  }
`;

export const ResumeWrapper = styled.a`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.headingColor};
  background: ${({ theme }) => theme.colors.contentBackground};
  border: 2px solid rgba(255, 255, 255, 0);
  cursor: pointer;
  border-radius: 2rem;
  font-weight: 600;
  display: block;
  display: flex;
  gap: 0.2rem;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 0.8rem auto;
  &:hover {
    background: ${({ theme }) => theme.colors.contentHover};
  }
  text-decoration: none;
  @media ${(props) => props.theme.breakpoints.xl} {
    width: 63%;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 79%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 86%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 64%;
  }
`;

export const NotFoundContainer = styled.main`
  margin-top: 10rem;
  padding-left: calc(92px + 5rem);
  padding-right: calc(92px + 5rem + 2rem);
  place-items: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    & > p {
      text-align: center;
      font-weight: 600;
      line-height: 2.3rem;
      padding: 0, 0.5rem;
      padding-top: 0.5rem;

      a {
        color: ${({ theme }) => theme.colors.secondary};
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
        @media ${(props) => props.theme.breakpoints.sm} {
          display: block;
        }
      }
    }
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 0 calc(92px);
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0px;
  }
`;
