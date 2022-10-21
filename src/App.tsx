import GlobalStyle, { Container } from "./components/Common.styled";

const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <h1>Hello, Styled React!</h1>
      <h2>ENV test: {process.env.TEST}</h2>
    </Container>
  </>
);

export default App;
