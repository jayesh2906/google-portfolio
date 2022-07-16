import { useContext } from "react";
import { NavBarContainer, NavBarUl, LinkWrapper } from "./Header.styled";
import NavLink from "next/link";
import { useRouter } from "next/router";
import { ThemeContext } from "../../pages/_app";
import { navBar } from "../../constants/constants";

const NavBar = () => {
  const router = useRouter();
  const { darkMode } = useContext(ThemeContext);
  const activeStyle = {
    borderBottom: `2px solid ${darkMode ? "#79B4F8" : "#1A0DAB"}`,
    color: `${darkMode ? "#79B4F8" : "#1A0DAB"}`,
  };

  return (
    <NavBarContainer>
      <NavBarUl>
        {navBar.map(({ name, path, icon: Icon }) => {
          return (
            <NavLink key={name} href={path}>
              <LinkWrapper
                darkMode={darkMode}
                style={router.pathname == path ? activeStyle : {}}
              >
                <Icon size={20} />
                <li>{name}</li>
              </LinkWrapper>
            </NavLink>
          );
        })}
      </NavBarUl>
    </NavBarContainer>
  );
};

export default NavBar;
