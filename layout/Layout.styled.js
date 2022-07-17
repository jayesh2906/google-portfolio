import styled from "styled-components";

export const Container = styled.div`
  width: 96%;
  margin: auto;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 92%;
  }
  transition: 200ms all;
`;
