import {
  Heading,
  AskForWrapper,
  AccordionContainer,
} from "./PeopleAlsoAsk.styled";
import Accordion from "./Accordion";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { accordionData } from "../../constants/constants";

const PeopleAlsoAsk = () => {
  return (
    <AccordionContainer>
      <AskForWrapper>
        <Heading>People also ask</Heading>
        <BiDotsVerticalRounded size={20} />
      </AskForWrapper>
      <div>
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
