import React, { useContext } from "react";
import { NavBarContainer, NavBarUl, LinkWrapper } from "./Header.styled";
import NavLink from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { useRouter } from "next/router";
import { ThemeContext } from "../../pages/_app";

const NavBar = () => {
  const router = useRouter();
  const { darkMode, handleThemeMode } = useContext(ThemeContext);
  const activeStyle = {
    borderBottom: `2px solid ${darkMode ? "#79B4F8" : "#1A0DAB"}`,
    color: `${darkMode ? "#79B4F8" : "#1A0DAB"}`,
  };

  return (
    <NavBarContainer>
      <NavBarUl>
        <NavLink href="/">
          <LinkWrapper
            style={router.pathname == "/" ? activeStyle : {}}
            className="ac"
          >
            <AiOutlineSearch size={20} />
            <li>All</li>
          </LinkWrapper>
        </NavLink>
        <NavLink href="/skills">
          <LinkWrapper style={router.pathname == "/skills" ? activeStyle : {}}>
            <MdOutlineTipsAndUpdates size={20} />
            <li>Skills</li>
          </LinkWrapper>
        </NavLink>
        <NavLink href="/projects">
          <LinkWrapper
            style={router.pathname == "/projects" ? activeStyle : {}}
          >
            <AiOutlineFundProjectionScreen size={20} />
            <li>Projects</li>
          </LinkWrapper>
        </NavLink>
        <NavLink href="/contact">
          <LinkWrapper style={router.pathname == "/contact" ? activeStyle : {}}>
            <BiPhoneCall size={20} />
            <li>Contact</li>
          </LinkWrapper>
        </NavLink>
        <NavLink href="/map">
          <LinkWrapper style={router.pathname == "/map" ? activeStyle : {}}>
            <MdOutlineLocationOn size={20} />
            <li>Map</li>
          </LinkWrapper>
        </NavLink>
      </NavBarUl>
    </NavBarContainer>
  );
};

export default NavBar;
