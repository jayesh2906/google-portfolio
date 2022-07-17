import TitleDesc from "../components/TitleDesc";
import { SkillContainer, SkillOverview } from "../styles/Skills.styled";

const Skills = () => {
  return (
    <div>
      <TitleDesc
        title="Jayesh's Skills"
        desc="Here mentioned all the technical skills of Jayesh."
      />
      <SkillContainer>
        <p>
          Jayesh loves to develope innovative web apps using new technologies,
          He is keen to gain experience, enhance and upgrade his skills, He
          enjoys building everything from small sites and landing pages to rich
          interactive web apps. He loves creating visually stunning, unique and
          responsive web apps.
        </p>
        <SkillOverview>
          <div>
            <h3>Frontend Skills</h3>
            <p>
              JavaScript, React Js, Redux, React Native, Next Js, Html5,
              CSS3,Tailwind Css, Material Ui, Bootstrap5, Sass and Styled
              Component.
            </p>
          </div>
          <div>
            <h3>Backend Skills</h3>
            <p>
              Node Js, Express Js, Mongo Db, Next Js, Postman and
              Jwt-Authentication.
            </p>
          </div>
        </SkillOverview>
      </SkillContainer>
    </div>
  );
};
export default Skills;
