import React, { useContext, useState } from "react";
import { ThemeContext } from "../../pages/_app";
import {
  AccordionItem,
  AccordionTitle,
  AccordionContent,
} from "./PeopleAlsoAsk.styled";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import NavLink from "next/link";

const Accordion = ({ question, answer, index }) => {
  const { darkMode } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordionItem style={{ borderColor: darkMode ? "#3c4043" : "#ebebeb" }}>
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
            <React.Fragment>
              <a>
                <NavLink href="/skills">View all skills...</NavLink>
              </a>
            </React.Fragment>
          )}
        </AccordionContent>
      )}
    </AccordionItem>
  );
};

export default Accordion;
