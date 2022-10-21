import styled, { createGlobalStyle } from "styled-components/macro";

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

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
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

export const Card = styled.div`
  background-color: #fff;
  color: #333;
  border-radius: 15px;
  padding: 25px 50px;
  margin: 20px 0;
  position: relative;
`;

export const Old = styled.p`
  text-decoration: line-through;
`;

export const AboutList = styled.ul`
  margin-top: 20px;
`;
