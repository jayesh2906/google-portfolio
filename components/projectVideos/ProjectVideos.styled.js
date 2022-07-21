import styled from "styled-components";

export const VideosContainer = styled.main`
  margin: 2.5rem 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 3rem 0;
  }
`;

export const Heading = styled.h2`
  font-weight: 400;
  font-size: 2.2rem;
  margin-top: -1px;
  margin-left: 0.5rem;
`;

export const VideosHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #ecedef;
  color: ${({ theme }) => theme.colors.headingColor};
  border-color: ${({ theme }) => theme.colors.borderColor};
`;

export const VideoItem = styled.div`
  display: flex;
  position: relative;
  border-bottom: 1px solid #ecedef;
  padding: 1rem 0;
  align-items: center;
  gap: 2rem;
  :last-child {
    padding-bottom: 3rem;
  }
  border-color: ${({ theme }) => theme.colors.borderColor};
`;

export const ViewAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 50%;
  padding: 0.3rem 0;
  background: ${({ theme }) => theme.colors.contentBackground};
  border: 1px solid rgba(255, 255, 255, 0);
  cursor: pointer;
  border-radius: 1.8rem;
  bottom: -16%;
  left: 50%;
  transform: translate(-50%);

  &:hover {
    background: ${({ theme }) => theme.colors.contentHover};
  }
`;

export const ImageContainer = styled.div`
  flex-basis: 22%;
  position: relative;
  @media ${(props) => props.theme.breakpoints.lg} {
    flex-basis: 27%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-basis: 29%;
  }
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const PlayIcon = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Description = styled.div`
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    gap: 0.3rem;
    flex-basis: 67%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-basis: 64%;
  }
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 400;
  cursor: pointer;
  width: fit-content;
  color: ${({ theme }) => theme.colors.secondary};
  @media ${(props) => props.theme.breakpoints.sm} {
  }
  margin-bottom: 1rem 0;
  &:hover {
    text-decoration: underline;
  }
`;

export const Text = styled.p`
  font-size: 1.4rem;
  margin: 0.2rem 0;
`;
