import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";
import { BtnLink, Container, PageHeader, SectionComment } from "../components/Common.styled";

const Home = () => (
  <Container>
    <PageHeader>What do you need?</PageHeader>
    <SectionComment>Please choose from an option below</SectionComment>

    <BtnLink to="/new-ticket" isReverse>
      <FaQuestionCircle /> Create New Ticket
    </BtnLink>

    <BtnLink to="/tickets">
      <FaTicketAlt /> View My Tickets
    </BtnLink>
  </Container>
);

export default Home;
