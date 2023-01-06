import { Link } from "react-router-dom";
import styled, { createGlobalStyle, css } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    height: calc(100vh - 100px); // temp anti-scroll)
  }
`;

export default GlobalStyle;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

export const Container = styled.div`
  max-width: 768px;
  margin: auto;
  padding: 0 20px;
  text-align: initial;
`;

export const PageHeader = styled.h1`
  margin: 1rem 0;
  font-size: 2rem;
  font-weight: 800;
`;

export const SectionHeader = styled.h2`
  margin: 1rem 0;
  font-weight: 600;
  font-size: 1.25rem;
`;

export const SectionComment = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  padding: 0 20px;
  color: #828282;
`;

export const Card = styled.div`
  background-color: #fff;
  color: #333;
  border-radius: 15px;
  padding: 25px 50px;
  margin: 20px 0;
  position: relative;
`;

export const Btn = styled.button`
  padding: 10px 20px;
  border: 1px solid #000;
  border-radius: 5px;
  background: #000;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  appearance: button;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    margin-right: 8px;
  }

  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
`;

export const BtnBlock = styled(Btn)`
  width: 100%;
  margin-bottom: 20px;
`;

export const BtnBlockWhite = styled(BtnBlock)`
  background: #fff;
  color: #000;
`;

export const BtnLink = styled(Link)`
  padding: 10px 20px;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  appearance: button;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  text-decoration: none;

  & > svg {
    margin-right: 8px;
  }
`;

export const BtnLinkWhite = styled(BtnLink)<{ size?: "small" }>`
  background: #fff;
  color: #000;

  ${({ size }) =>
    size === "small" &&
    css`
      padding: 5px 15px;
      font-size: 13px;
      margin: 0;
    `}
`;

export const BtnLinkBlack = styled(BtnLink)`
  background: #000;
  color: #fff;
`;

export const Old = styled.p`
  text-decoration: line-through;
`;

export const AboutList = styled.ul`
  margin-top: 20px;
`;
