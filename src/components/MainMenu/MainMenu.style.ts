import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const MainMenu = styled.nav``;

export const MainMenuListElement = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  padding: 0;
  margin: 0;


  @media screen and (max-width: 767px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 90vh;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
  }
`;

export const MainMenuListItemElement = styled.li`
  align-content: flex-end;
  margin: 0;
  padding: 0 8px;
  list-style: none;
  font-size: 14px;
  font-weight: 600;

  & a {
    font-weight: inherit;
    color: ${colors.text.title};
  }
`;

export const MobileMenu = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
`;

export const MobileMenuActive = styled.div `
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: absolute;
    width: 250px;
    height: 100vh;
    padding: 50px;
    padding-top: 90px;
    top: 0;
    background: white;
    right: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
`;
