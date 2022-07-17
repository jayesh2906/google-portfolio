import {
  Heading,
  VideosHeadingWrapper,
  VideosContainer,
  ImageContainer,
  Description,
  VideoItem,
  Title,
  Text,
  PlayIcon,
  ViewAll,
} from "./ProjectVideos.styled";
import NavLink from "next/link";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import { RiVideoLine } from "react-icons/ri";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { projectVideos } from "../../constants/constants";
import Image from "next/image";

const ProjectVideos = () => {
  return (
    <VideosContainer>
      <VideosHeadingWrapper>
        <span>
          <RiVideoLine size={20} />
        </span>
        <Heading>Project videos</Heading>
        <BiDotsVerticalRounded size={20} />
      </VideosHeadingWrapper>
      <div>
        {projectVideos.map((project, index) => {
          return (
            <VideoItem key={project.heading}>
              <ImageContainer
                onClick={() => {
                  window.open(project.link, "_blank");
                }}
              >
                <Image
                  src={project.image}
                  alt="video"
                  width={124}
                  height={72}
                  style={{
                    borderRadius: ".5rem",
                    zIndex: "-1",
                  }}
                />
                <PlayIcon>
                  <BsFillPlayCircleFill size={22} color="#FDFAF8" />
                </PlayIcon>
              </ImageContainer>
              <Description>
                <Title
                  onClick={() => {
                    window.open(project.link, "_blank");
                  }}
                >
                  {project.heading}
                </Title>
                <div>
                  <Text>
                    <strong>{project.platform}</strong> {project.author}
                  </Text>
                  <Text>{project.date}</Text>
                </div>
              </Description>
              {index === 2 && (
                <NavLink href="/projects">
                  <ViewAll>
                    View all
                    <span>
                      <BsArrowRightShort size={25} />
                    </span>
                  </ViewAll>
                </NavLink>
              )}
            </VideoItem>
          );
        })}
      </div>
    </VideosContainer>
  );
};

export default ProjectVideos;
