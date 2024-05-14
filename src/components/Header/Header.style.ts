import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../styles/colors";

export const HeaderElement = styled.header`
  padding: 16px 0px;
  background-color: ${colors.primary.main};
  position: sticky;   
  top: 0;
  z-index: 50;
  `;

export const HeaderWrapperElement = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: auto auto;
`;

export const LogoElement = styled(Link)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  color: ${colors.text.title};

  img {
    width: 100%;
    margin-right: 8px;
  }
`;

export const MenuIcon = styled.i`
    display: none;

    @media screen and (max-width: 767px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        z-index: 20;
    }

    
`;

/*const heading = Styled.h1`
        Text-align:right;

            @media (max-width: 767px) {
                text-align: center;
            }
            @media (max-width: 400px) {
                text-align: left;
            }
    `;*/