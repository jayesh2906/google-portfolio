import { useContext } from "react";
import { ThemeContext } from "../../pages/_app";
import { FooterContainer, SocialLinks } from "./Footer.styled";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { footerData } from "../../constants/constants";

const Footer = () => {
  const { darkMode, handleThemeMode } = useContext(ThemeContext);

  return (
    <FooterContainer darkMode={darkMode}>
      <p>
        {footerData.name}
        <AiOutlineCopyrightCircle />
        <span>{footerData.year}</span>
      </p>
      <span onClick={handleThemeMode}>
        {footerData.darkTheme}
        {darkMode ? "on" : "off"}
      </span>
      <SocialLinks darkMode={darkMode}>
        {footerData.socialLinks.map(({ href, icon: Icon }) => {
          return (
            <a key={Icon} href={href} target="_blank" rel="noopener noreferrer">
              <Icon size={22} />
            </a>
          );
        })}
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;
