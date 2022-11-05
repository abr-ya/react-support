import { ContainerWithBack, Loader, TicketsList } from "components";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "features/typedRedux";
import { getTickets, reset } from "features/ticket/ticketSlice";

const Tickets = () => {
  const { tickets, isLoading } = useAppSelector((state) => state.ticket);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTickets());

    // clear data when go out ?? need it?
    // return () => {
    //   dispatch(reset());
    // };
  }, []);

  const renderMain = () => {
    if (isLoading) return <Loader />;

    return <TicketsList data={tickets} />;
  };

  return <ContainerWithBack title="Tickets List">{renderMain()}</ContainerWithBack>;
};

export default Tickets;
