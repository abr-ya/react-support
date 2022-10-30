import { ITicket } from "interfaces";
import { Header } from "./Ticket.styled";
import TicketItem from "./TicketItem";

interface ITicketsList {
  data: ITicket[];
}

const TicketsList = ({ data }: ITicketsList) => {
  return (
    <>
      <Header>
        <div>Date</div>
        <div>Product</div>
        <div>Status</div>
        <div>-</div>
      </Header>
      {data.map((ticket) => (
        <TicketItem key={ticket._id} ticket={ticket} />
      ))}
    </>
  );
};

export default TicketsList;
