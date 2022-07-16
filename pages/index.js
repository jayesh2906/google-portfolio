import PeopleAlsoAsk from "../components/peopleAlsoAsk";
import RelatedSearch from "../components/relatedSearch";
import ProjectVideos from "../components/projectVideos";
import SideBar from "../components/SideBar";
import TitleDesc from "../components/TitleDesc";
import Image from "next/image";
import {
  Text,
  Heading,
  ProjectList,
  Company,
  WorkExperience,
  HomeContainer,
  InfoContainer,
  MobileProfile,
  MobileHeading,
  ResumeWrapper,
} from "../styles/Home.styled";
import { info } from "../constants/constants";
import { useContext } from "react";
import { ThemeContext } from "./_app";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div>
      <TitleDesc
        title="Jayesh's Portfolio"
        desc="This is Google theme portfolio created by Jayesh choudhary using Nextjs Framework."
      />
      <HomeContainer>
        <InfoContainer>
          <Heading>{info.heading}</Heading>
          <MobileHeading>{info.mobileHeading}</MobileHeading>
          <Text>{info.description}</Text>
          <MobileProfile>
            <Image
              style={{ zIndex: "-1" }}
              src="/assets/Profile.png"
              alt="Profile"
              width={280}
              height={280}
            />
          </MobileProfile>
          <span>
            <ResumeWrapper
              darkMode={darkMode}
              href="/assets/Jayesh's Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jayesh's Resume
            </ResumeWrapper>
          </span>
          <WorkExperience>
            <Heading style={{ display: "block" }}>
              {info.workExperience}
            </Heading>
            <strong>{info.designation}</strong>
            <Company>
              <p>{info.company}</p>
              <i>{info.timePeriod}</i>
            </Company>
            <ProjectList>
              {info.workProjects.map(({ title, description }) => {
                return (
                  <li key={title}>
                    <strong>{title}</strong> {description}
                  </li>
                );
              })}
            </ProjectList>
          </WorkExperience>
          <PeopleAlsoAsk />
          <ProjectVideos />
          <RelatedSearch />
        </InfoContainer>
        <SideBar />
      </HomeContainer>
    </div>
  );
};

export default Home;
