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
        font-size: clamp(20px, 3.3vw, 5vw);
        text-align: center;
    }

    & salesforce {
        color: blue;
    }

    & img {
        width: 40%;
    }

    @media screen and (max-width: 767px) {
        
    }
`;


export const FlexSection = styled.div `
    display: flex;
    justify-content: space-around;
    margin-bottom: 3vw;
    margin-top: 10px;

    & h3 {
        font-size: clamp(20px, 2.2vw, 3.3vw);
    }
`;