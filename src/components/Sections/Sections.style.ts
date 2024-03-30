import { styled } from "styled-components";

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
        font-weight:600;
        text-align: center;
    }

    & img {
        width: 40%;
    }

    @media screen and (max-width: 767px) {
        
    }
`;

export const Section = styled.div `
margin-top: 20px;

    & h3 {
        font-size: clamp(20px, 2.8vw, 3.3vw);
        font-weight: 500;
        text-align: center;
    }
`;

export const FlexSection = styled.div `
    display: flex;
    justify-content: space-around;
    margin-bottom: 3vw;
    margin-top: 10px;
    
`;

export const SectionConfig = styled.div `

    & h2 {
        font-size: clamp(20px, 3.3vw, 2.5vw);
    };


    font-size: 28px;
    font-weight: 700;
`;