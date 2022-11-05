import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";
import { BtnLinkBlack, BtnLinkWhite, Container, PageHeader, SectionComment } from "../components/Common.styled";

const Home = () => (
  <Container>
    <PageHeader>What do you need?</PageHeader>
    <SectionComment>Please choose from an option below</SectionComment>

    <BtnLinkBlack to="/new-ticket">
      <FaQuestionCircle /> Create New Ticket
    </BtnLinkBlack>

    <BtnLinkWhite to="/tickets">
      <FaTicketAlt /> View My Tickets
    </BtnLinkWhite>

    <SectionComment>ENV_test: {process.env.TEST}</SectionComment>
  </Container>
);

export default Home;
