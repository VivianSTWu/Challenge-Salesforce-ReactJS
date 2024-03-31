import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const MainPageTitle = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    grid-template-columns: 60% 40%;
    white-space: pre-line;
    margin-top: 20px;
    margin-bottom: 50px;


    & h1 {
        font-size: clamp(20px, 4vw, 7vw);
        font-weight:500;
        text-align: center;
        color: ${colors.subtitle.main}

    }

    & img {
        width: 40%;
    }

    @media screen and (max-width: 767px) {
        
    }
`;

export const MainPageTitleDesc = styled.div `
   & p {
    font-weight: 300;
   }
`;




export const Section = styled.div `
margin-top: 20px;

    & h3 {
        font-size: clamp(20px, 2.8vw, 3.3vw);
        font-weight: 500;
        text-align: center;
        color: ${colors.subtitle.main}
    }

    & h4 {
        color: ${colors.subtitle.main}
    }

    & p {
        font-weight: 300;
    }

    @media screen and (max-width: 767px) {
        & h3 {
            font-size: clamp(20px, 4vw, 4vw);
        }
    }

`;

export const FlexSection = styled.div `
    display: flex;
    justify-content: space-around;
    margin-bottom: 3vw;
    margin-top: 10px;

    @media screen and (max-width: 767px) {
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
`;

export const SectionGridImgLeft = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3vw;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;

    & h1 {
        color: ${colors.subtitle.main}
    }

    @media screen and (max-width: 767px) {
        display: flex;
        flex-direction: column-reverse;
        text-align: center;
    }
`;

export const SectionGridImgRight = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3vw;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;

    & h1 {
        color: ${colors.subtitle.main}
    }

    @media screen and (max-width: 767px) {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
`;

export const ProductImage = styled.div `
    & img {
        width: 100%;
        object-fit: cover;
    }
`;

export const SectionConfig = styled.div `

    & h2 {
        font-size: clamp(20px, 3.3vw, 2.5vw);
        font-weight: 600;
    };

    & p {
        font-size: clamp(20px, 3.3vw, 2.5vw);
        font-weight: 300;
        font-size: 20px;
    };

    & img {
        width: 40vw;
        object-fit: cover;
      }
`;