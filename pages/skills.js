import Image from "next/image";
import TitleDesc from "../components/TitleDesc";
import { skillsData } from "../constants/constants";
import {
  SkillContainer,
  SkillItem,
  SkillOverview,
  SkillsGrid,
} from "../styles/Skills.styled";

const Skills = () => {
  return (
    <div>
      <TitleDesc
        title="Jayesh's Skills"
        desc="Here mentioned all the technical skills of Jayesh."
      />
      <SkillContainer>
        <p>{skillsData.info}</p>
        <SkillOverview>
          {skillsData.skills.map(({ title, description }) => {
            return (
              <div key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            );
          })}
        </SkillOverview>
        <SkillsGrid>
          {skillsData.skillsIcons.map(({ title, href, src, shadowColor }) => {
            return (
              <SkillItem
                key={title}
                shadowColor={shadowColor}
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <Image alt="skills" width={45} height={45} src={src} />
                <p>{title}</p>
              </SkillItem>
            );
          })}
        </SkillsGrid>
      </SkillContainer>
    </div>
  );
};
export default Skills;
