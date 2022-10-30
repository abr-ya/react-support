import { Header, PrivateRoute } from "components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle, { Wrapper } from "./components/Common.styled";
import { Home, About, Error404, Login, Register, NewTicket, Tickets } from "./pages";

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
          <Route path="/new-ticket" element={<PrivateRoute />}>
            <Route path="/new-ticket" element={<NewTicket />} />
          </Route>
          <Route path="/tickets" element={<PrivateRoute />}>
            <Route path="/tickets" element={<Tickets />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Wrapper>
    </Router>
    <ToastContainer />
  </>
);

export default App;
