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
} from "../styles/Home.styled";
import { ProfileContainer } from "../components/SideBar.styled";

export default function Home() {
  return (
    <div>
      <TitleDesc
        title="Jayesh's Portfolio"
        desc="This is Google theme portfolio created by Jayesh choudhary using Nextjs Framework."
      />
      <HomeContainer>
        <InfoContainer>
          <Heading>Jayesh Choudhary: Software Engineer</Heading>
          <Text>
            Experienced software engineer with a passion for developing
            innovative programs that expedite the efficiency and effectiveness
            of organizational success.
          </Text>
          <MobileProfile>
            <Image
              style={{ zIndex: "-1" }}
              src="/Profile.png"
              alt="Profile"
              width={280}
              height={280}
            />
          </MobileProfile>
          <WorkExperience>
            <Heading>Work Experience</Heading>
            <strong style={{ fontSize: "1.7rem" }}>Software Engineer</strong>
            <Company>
              <p>Mindtree Private Limited</p>
              <i>03/2021 - Present</i>
            </Company>
            <ProjectList>
              <li>
                <strong>DHRE RealConnect (01/02/2022 - Present) :</strong>{" "}
                Currently, Working on a live project from scratch as a React Js
                Frontend developer.
              </li>
              <li>
                <strong>Informa DNA (01/07/2021 - 31/01/2022) :</strong> Worked
                with mentioned technologies : React Js, Redux-saga,
                Redux-toolkit, SASS, Material Ui, axios, ag-grid-react, formik
                and yup. Mainly worked on the Logical part of frontend like API
                integration, Implementation of new features, Reusable
                components, Bug fixes using React Js, JavaScript and SASS.
              </li>
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
}
