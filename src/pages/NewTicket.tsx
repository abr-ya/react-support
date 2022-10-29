import { TicketForm } from "components";
import { Container, PageHeader, SectionComment } from "components/Common.styled";

const NewTicket = () => {
  const formHandler = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <PageHeader>Create New Ticket</PageHeader>
      <SectionComment>Please fill out the form below</SectionComment>
      <TicketForm formHandler={formHandler} />
    </Container>
  );
};

export default NewTicket;
