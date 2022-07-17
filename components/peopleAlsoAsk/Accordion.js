import { useState } from "react";
import {
  AccordionItem,
  AccordionTitle,
  AccordionContent,
} from "./PeopleAlsoAsk.styled";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import NavLink from "next/link";

const Accordion = ({ question, answer, index }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordionItem>
      <AccordionTitle onClick={() => setIsActive(!isActive)}>
        <div>{question}</div>
        <div>
          {isActive ? (
            <MdKeyboardArrowUp size={23} color="inherit" />
          ) : (
            <MdKeyboardArrowDown size={23} color="inherit" />
          )}
        </div>
      </AccordionTitle>
      {isActive && (
        <AccordionContent>
          {answer}{" "}
          {index === 0 && (
            <a>
              <NavLink href="/skills">View all skills...</NavLink>
            </a>
          )}
        </AccordionContent>
      )}
    </AccordionItem>
  );
};

export default Accordion;
