import Image from "next/image";
import { useContext } from "react";
import { sideBarInfo } from "../constants/constants";
import { ThemeContext } from "../pages/_app";
import { AsideContainer } from "../styles/Home.styled";
import {
  ContactDetails,
  Item,
  ProfileContainer,
  About,
} from "./SideBar.styled";

const SideBar = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <AsideContainer darkMode={darkMode}>
      <ProfileContainer>
        <Image
          style={{ zIndex: "-1" }}
          src="/assets/Profile.png"
          alt="Profile"
          width={320}
          height={320}
        />
      </ProfileContainer>
      <About>{sideBarInfo.about}</About>
      <hr />
      <ContactDetails>
        {sideBarInfo.contactDetails.map(
          ({ title, href, icon: Icon }, index) => {
            return (
              <Item key={title}>
                <Icon size={20} color={darkMode ? "white" : "black"} />
                {index === 1 ? (
                  <p>{title}</p>
                ) : (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {title}
                  </a>
                )}
              </Item>
            );
          }
        )}
      </ContactDetails>
    </AsideContainer>
  );
};

export default SideBar;
