import { Header } from "components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle, { Wrapper } from "./components/Common.styled";
import { Home, About, Error404, Login, Register } from "./pages";

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Wrapper>
    </Router>
    <ToastContainer />
  </>
);

export default App;
