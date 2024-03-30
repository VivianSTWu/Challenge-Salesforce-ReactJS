import { CSSProperties, styled } from "styled-components";

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

export const Section = styled.div `
    & h3 {
        font-size: clamp(20px, 2.2vw, 3.3vw);
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


export const ConfigDiv = styled.div `
    display: flex;
    flex-direction: column;
    gap: 4em;
`;


export const BackgroundForm: CSSProperties = {
    backgroundImage: 'url/src/assets/images/Group.png'
}



export const ParagraphForm= styled.div `
    width: 23vw;
    padding: 20px 100px 15px 0; 
    height: ;
    font-size: 20px;
    font-Weight: 700;
    line-height: 25.13px;
`;

export const FormSection = styled.div `
    background-color: #CFEAFF;
    border-radius: 27px;
    width: 526px;
    height: 1080px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 23px ;

    & input {
        background-color: #fff;
        width: 25vw;
        height: 40px;
        border: 1.55px solid #6C6C6C;
        border-radius: 8px;
        font-weight: 550;
    };
`;

export const Input: CSSProperties = {
    padding: '0 0 0 0.5vw'
}

export const InputBox: CSSProperties = {

    padding: '2vh 0 30vh 0.5vw'
}