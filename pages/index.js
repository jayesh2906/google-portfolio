import PeopleAlsoAsk from "../components/peopleAlsoAsk";
import RelatedSearch from "../components/relatedSearch";
import ProjectVideos from "../components/projectVideos";
import SideBar from "../components/SideBar";
import TitleDesc from "../components/TitleDesc";
import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
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

const Home = () => {
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
              href="/assets/Jayesh's Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {`Jayesh's Resume`}
              <AiOutlineDownload size={19} />
            </ResumeWrapper>
          </span>
          <WorkExperience>
            <Heading style={{ display: "block" }}>
              {info.workExperience}
            </Heading>
            {info.companies.map((company) => {
              return (
                <div
                  key={company.name}
                  style={{
                    marginBottom: "15px",
                  }}
                >
                  <strong>{company.designation}</strong>
                  <Company>
                    <p>{company.name}</p>
                    <i>{company.timePeriod}</i>
                  </Company>
                  <ProjectList>
                    {company.workProjects.map(({ title, description }) => {
                      return (
                        <li key={title}>
                          <strong>{title}</strong>{" "}
                          <span
                            dangerouslySetInnerHTML={{ __html: description }}
                          ></span>
                        </li>
                      );
                    })}
                  </ProjectList>
                </div>
              );
            })}
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
