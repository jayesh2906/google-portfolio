import styled from "styled-components";

export const AccordionContainer = styled.main``;

export const Heading = styled.h2`
  font-weight: 400;
  font-size: 2.2rem;
  margin-top: -1px;
`;

export const AskForWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
`;

export const AccordionItem = styled.div`
  :last-child {
    border-bottom: 1px solid #ecedef;
  }
`;
export const AccordionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ecedef;
  padding: 1.3rem 0;
  border-color: inherit;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
`;
export const AccordionContent = styled.div`
  padding-bottom: 1.2rem;
  padding-top: 0rem;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
  }
`;
