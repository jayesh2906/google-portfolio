import { useContext } from "react";
import {
  Heading,
  AskForWrapper,
  AccordionContainer,
} from "./PeopleAlsoAsk.styled";
import Accordion from "./Accordion";
import { ThemeContext } from "../../pages/_app";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { accordionData } from "../../constants/constants";

const PeopleAlsoAsk = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <AccordionContainer>
      <AskForWrapper style={{ color: darkMode ? "#ddd" : "#202124" }}>
        <Heading>People also ask</Heading>
        <BiDotsVerticalRounded size={20} />
      </AskForWrapper>
      <div className="accordion">
        {accordionData.map(({ question, answer }, index) => (
          <Accordion
            key={question}
            question={question}
            answer={answer}
            index={index}
          />
        ))}
      </div>
    </AccordionContainer>
  );
};

export default PeopleAlsoAsk;
