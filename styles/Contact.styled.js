import styled from "styled-components";

export const ContactContainer = styled.main`
  margin-top: 2rem;
  padding-left: calc(92px + 5rem + 2rem);
  padding-right: calc(92px + 5rem + 15rem);
  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 0 calc(92px);
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    gap: 0.5rem;

    label {
      margin-left: 0.2rem;
    }
  }

  input[type="text"],
  input[type="email"],
  textarea {
    background: ${({ theme }) => theme.colors.contentBackground};
    border: 2px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 0.7rem;
    padding: 1rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.primary};

    &:focus {
      outline: none;
      border: 2px solid ${({ theme }) => theme.colors.contentHover};
    }

    ::placeholder {
      color: ${({ theme }) => theme.colors.primary};
    }
    caret-color: ${({ theme }) => theme.colors.primary};
  }

  textarea {
    height: 10rem;
    resize: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px
      ${({ theme }) => theme.colors.contentBackground} inset !important;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.primary} !important;
  }
`;

export const NameEmail = styled.section`
  display: flex;
  justify-content: space-between;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
  }

  div {
    display: flex;
    width: 49%;
    flex-direction: column;
    @media ${(props) => props.theme.breakpoints.sm} {
      width: 100%;
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.contentHover};
  padding: 1rem 2rem;
  font-size: 1.6rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid transparent;
  border-radius: 0.7rem;
  color: ${({ theme }) => theme.colors.headingColor};
  cursor: pointer;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.contentHover};
    background-color: ${({ theme }) => theme.colors.contentBackground};
  }
`;

export const ResultWrapper = styled.p`
  padding: 1rem;
  border-radius: 0.7rem;
  text-align: center;
  color: ${({ error }) => (error ? "#88452F" : "#155724")};
  background-color: ${({ error }) => (error ? "#F8D7DA" : "#d4edda")};
  border: 1px solid ${({ error }) => (error ? "#F5C6CB" : "#c3e6cb")};
  visibility: ${({ showResult }) => (showResult ? "visible" : "hidden")};
`;

export const SubmitWrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  margin-top: 2.5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
