import styled from "styled-components";
import { Text } from "../styles/Home.styled";

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
    word-break: break-all;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const About = styled(Text)`
  margin: 0.5rem 0;
  padding: 0 1rem;
  line-height: 2rem;
  text-align: center;
`;
