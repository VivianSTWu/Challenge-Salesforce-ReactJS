import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const CardElement = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  justify-content: flex-end;
  max-width: 264px;
  border-radius: 40px;
  background: ${colors.commom.white};

  & img {
    width: 100%;
    height: 225px;
    border-top-left-radius: 28px;
    border-top-right-radius: 28px;
  }
`;

export const CardContent = styled.div`
  margin: 8px 16px 16px 16px;

  color: ${colors.text.main};
  & h2 {
    margin-bottom: 8px;
    font-size: 1.2rem;
    font-weight: 700;
    color: ${colors.text.title};
  }

  & p {
    min-height: 168px;
    font-size: 1rem;
  }

  & button {
    width: 100%;
    margin-top: 16px;
  }
`;

export const CardPrice = styled.p`
  margin: 16px 16px 8px 16px;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.text.title};
`;
