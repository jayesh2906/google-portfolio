import styled from "styled-components";

export const MapContainer = styled.main`
  margin-top: 2rem;
  padding: 0 calc(2rem);
  background: url(../assets/loader.gif) center center no-repeat;
  background-size: 7%;
  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 0 calc(2rem);
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0px;
    background-size: 10%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    background-size: 20%;
  }
`;
