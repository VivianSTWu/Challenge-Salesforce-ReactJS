import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../styles/colors";

export const Footer = styled.header`
  margin-top: 70px;
  width: 100%;
  height: 10vh;
  background-color: ${colors.backgound.main};
`;

export const FooterWrapperElement = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: auto auto;
`;