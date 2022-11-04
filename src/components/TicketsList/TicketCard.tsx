import { ITicket } from "interfaces";
import { Card, Description, Status, SubTitle, TitleStatus } from "./Ticket.styled";

interface ITicketCard {
  ticket: ITicket;
}

const TicketCard = ({ ticket }: ITicketCard) => (
  <Card>
    <TitleStatus>
      Ticket ID: {ticket._id}
      <Status status={ticket.status}>{ticket.status}</Status>
    </TitleStatus>
    <SubTitle>Date Submitted: {new Date(ticket.createdAt).toLocaleString("ru")}</SubTitle>
    <hr />
    <Description>
      <SubTitle>Description of Issue</SubTitle>
      <p>{ticket.description}</p>
    </Description>
  </Card>
);

export default TicketCard;
