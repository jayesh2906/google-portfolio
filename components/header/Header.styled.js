import styled from "styled-components";

export const HeaderContainer = styled.div`
  min-height: 110px;
  border-bottom: 1px solid #ebebeb;
`;

export const TopSearchContainer = styled.div`
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;
  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 1rem;
  }
  min-height: 60px;
`;

export const Logo = styled.div`
  order: 1;
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const SearchBox = styled.div`
  order: 2;
  @media ${(props) => props.theme.breakpoints.sm} {
    order: 3;
    flex-basis: 100%;
  }
`;

export const SettingContainer = styled.div`
  order: 3;
  margin-left: auto;
  @media ${(props) => props.theme.breakpoints.sm} {
    order: 2;
  }
`;
