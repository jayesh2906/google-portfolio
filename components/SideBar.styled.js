import styled from "styled-components";

export const ProfileContainer = styled.div`
  padding-top: 0.5rem;
  width: 50%;
  margin: auto;
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  a {
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
  }
  p {
    word-break: break-all;
  }
`;
