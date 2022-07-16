import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "../pages/_app";
import { AsideContainer, Text } from "../styles/Home.styled";
import { ContactDetails, Item, ProfileContainer } from "./SideBar.styled";
import { GrMail } from "react-icons/gr";
import { BsFillPhoneFill } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const SideBar = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <AsideContainer style={{ borderColor: darkMode ? "#3c4043" : "#ebebeb" }}>
      <ProfileContainer>
        <Image
          style={{ zIndex: "-1" }}
          src="/Profile.png"
          alt="Profile"
          width={320}
          height={320}
        />
      </ProfileContainer>
      <Text
        style={{
          margin: ".5rem 0",
          padding: "0 1rem",
          textAlign: "center",
        }}
      >
        A Detailed oriented and Committed Engineering Professional with a
        Bachelor of Engineering in Information Technology. Well-versed in
        writing code to create systems that are reliable and user-friendly.
      </Text>
      <hr style={{ margin: "0 1rem" }} />
      <ContactDetails>
        <Item>
          <GrMail size={20} color={darkMode ? "white" : "black"} />
          <p>jayesh.choudhary2906@gmail.com</p>
        </Item>
        <Item>
          <BsFillPhoneFill size={20} color={darkMode ? "white" : "black"} />
          <p>8329812727</p>
        </Item>
        <Item>
          <AiFillGoogleCircle size={20} color={darkMode ? "white" : "black"} />
          <a
            href="https://google-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Portfolio link
          </a>
        </Item>
        <Item>
          <BiLinkAlt size={20} color={darkMode ? "white" : "black"} />
          <a
            href="https://jayesh2906.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio link
          </a>
        </Item>
        <Item>
          <FaLinkedin size={20} color={darkMode ? "white" : "black"} />
          <a
            href="https://www.linkedin.com/in/jayesh-choudhary-72444518b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin link
          </a>
        </Item>
        <Item>
          <AiFillGithub size={20} color={darkMode ? "white" : "black"} />
          <a
            href="https://github.com/jayesh2906"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github link
          </a>
        </Item>
        <Item>
          <AiFillTwitterCircle size={20} color={darkMode ? "white" : "black"} />
          <a
            href="https://twitter.com/JayeshMERN"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter link
          </a>
        </Item>
      </ContactDetails>
    </AsideContainer>
  );
};

export default SideBar;
