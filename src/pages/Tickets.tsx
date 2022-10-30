import { ContainerWithBack, Loader } from "components";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "features/typedRedux";
import { getTickets, reset } from "features/ticket/ticketSlice";

const Tickets = () => {
  const { tickets, isLoading } = useAppSelector((state) => state.ticket);
  console.log(tickets);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTickets());

    // clear data when go out
    return () => {
      dispatch(reset());
    };
  }, []);

  const renderMain = () => {
    if (isLoading) return <Loader />;

    return <span>Здесь будет список тикетов... Сейчас их {tickets.length}.</span>;
  };

  return <ContainerWithBack title="Create New Ticket">{renderMain()}</ContainerWithBack>;
};

export default Tickets;
