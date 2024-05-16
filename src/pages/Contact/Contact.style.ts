import { CSSProperties, styled } from "styled-components";
import { colors } from "../../styles/colors";

export const BackgroundForm: CSSProperties = {
    backgroundImage: 'url/src/assets/images/Group.png'
}

export const ParagraphForm= styled.div `
    width: 80%;
    height: ;
    font-size: 16px;
    font-Weight: 700;
    line-height: 25.13px;

    @media screen and (max-width: 767px) {
        font-size: 12px;
    }
`;

export const FormSection = styled.div `
    background-color: ${colors.background.lightblue};
    border-radius: 27px;
    width: 40vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px ;
    padding: 30px 16px;

    & label {
        font-size: 13px;
    }

    & input, select {
        background-color: #fff;
        width: 30vw;
        height: 30px;
        border: 1.55px solid #6C6C6C;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 300;
    };

    @media screen and (max-width: 767px) {
        width: 80vw;
        align-items: center;

        & label {
            font-size: 10px;
        }

        & input, select {
            width: 60vw;
            height: 25px;
            font-size: 10px;
            font-weight: 300;
        }
    }
`;

export const Input: CSSProperties = {
    padding: '0 0 0 0.5vw'
}

export const InputBox: CSSProperties = {

    padding: '2vh 0 30vh 0.5vw'
}