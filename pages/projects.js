import Image from "next/image";
import TitleDesc from "../components/TitleDesc";
import {
  ButtonGroups,
  ImageContainer,
  ProjectContainer,
  ProjectItem,
  ProjectsGrid,
} from "../styles/Projects.styled";
import { ThemeContext } from "./_app";
import { useContext } from "react";
import { PlayIcon } from "../components/projectVideos/ProjectVideos.styled";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { projectsData } from "../constants/constants";

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div>
      <TitleDesc
        title="Jayesh's Projects"
        desc="Here mentioned all the personal projects of Jayesh."
      />
      <ProjectContainer>
        <ProjectsGrid>
          {projectsData.map(
            ({
              title,
              image,
              description,
              videoDemo,
              liveDemo,
              sourceCode,
            }) => {
              return (
                <ProjectItem key={title} darkMode={darkMode}>
                  <h3>{title}</h3>
                  <ImageContainer
                    onClick={() => {
                      window.open(videoDemo, "_blank");
                    }}
                  >
                    <Image
                      alt="projects"
                      width={1366}
                      height={689}
                      src={image}
                    />
                    <PlayIcon>
                      <BsFillPlayCircleFill size={40} color="#FDFAF8" />
                    </PlayIcon>
                  </ImageContainer>
                  <ul>
                    {description.map((sentence) => {
                      return (
                        <li
                          key={sentence}
                          dangerouslySetInnerHTML={{ __html: sentence }}
                        ></li>
                      );
                    })}
                  </ul>
                  <ButtonGroups>
                    {videoDemo && (
                      <a href={videoDemo} target="_blank" rel="noreferrer">
                        Video Demo
                      </a>
                    )}
                    {liveDemo && (
                      <a href={liveDemo} target="_blank" rel="noreferrer">
                        Live Demo
                      </a>
                    )}
                    {sourceCode && (
                      <a href={sourceCode} target="_blank" rel="noreferrer">
                        Source Code
                      </a>
                    )}
                  </ButtonGroups>
                </ProjectItem>
              );
            }
          )}
        </ProjectsGrid>
      </ProjectContainer>
    </div>
  );
};

export default Projects;
