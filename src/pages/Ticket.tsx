import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getTicket } from "features/ticket/ticketSlice";
import { ContainerWithBack, Loader, TicketCard } from "components";
import { SectionComment } from "components/Common.styled";
import { useAppDispatch, useAppSelector } from "features/typedRedux";

const Ticket = () => {
  const { isLoading, isError, message, ticket } = useAppSelector((state) => state.ticket);

  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (isError) toast.error(message);

    dispatch(getTicket(id));
  }, [isError, message, id]);

  const renderMain = () => {
    if (isLoading) return <Loader />;

    return <TicketCard ticket={ticket} />;
  };

  return <ContainerWithBack title="Ticket Details">{renderMain()}</ContainerWithBack>;
};

export default Ticket;
