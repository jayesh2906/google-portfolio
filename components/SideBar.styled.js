import styled from "styled-components";
import { Text } from "../styles/Home.styled";

export const ProfileContainer = styled.div`
  position: relative;
  width: 210px;
  height: 220px;
  margin: 0.5rem auto;
  overflow: hidden;
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
