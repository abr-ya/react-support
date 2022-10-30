import { BtnLinkWhite } from "components/Common.styled";
import { ITicket } from "interfaces";
import { Link } from "react-router-dom";
import { Item, Status } from "./Ticket.styled";

interface ITicketItem {
  ticket: ITicket;
}

const TicketItem = ({ ticket }: ITicketItem) => (
  <Item>
    <div>{new Date(ticket.createdAt).toLocaleString("ru")}</div>
    <div>{ticket.product}</div>
    <Status status={ticket.status}>{ticket.status}</Status>
    <BtnLinkWhite to={`/ticket/${ticket._id}`} isSmall>
      View
    </BtnLinkWhite>
  </Item>
);

export default TicketItem;
