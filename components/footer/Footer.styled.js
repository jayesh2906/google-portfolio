import styled from "styled-components";

export const FooterContainer = styled.section`
  margin-top: 7rem;
  padding: 2rem;
  background-color: ${({ darkMode }) => (darkMode ? "#171717" : "#F2F2F2")};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 1.5rem;
    justify-content: space-around;
    padding: 1.5rem;
  }

  p {
    display: flex;
    align-items: center;
    font-weight: 600;
  }

  & > span {
    cursor: pointer;
    &:hover {
      color: ${({ darkMode }) => (darkMode ? "white" : "black")};
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      color: ${({ darkMode }) => (darkMode ? "white" : "black")};
    }
  }
`;
