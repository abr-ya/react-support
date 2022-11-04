import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getTicket } from "features/ticket/ticketSlice";
import { ContainerWithBack, Loader } from "components";
import { SectionComment } from "components/Common.styled";
import { useAppDispatch, useAppSelector } from "features/typedRedux";

const Ticket = () => {
  const { isLoading, isError, message } = useAppSelector((state) => state.ticket);

  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (isError) toast.error(message);

    dispatch(getTicket(id));
  }, [isError, message, id]);

  const renderMain = () => {
    if (isLoading) return <Loader />;

    return (
      <>
        <SectionComment>Details of ticket {id}</SectionComment>
      </>
    );
  };

  return <ContainerWithBack title="Ticket Details">{renderMain()}</ContainerWithBack>;
};

export default Ticket;
