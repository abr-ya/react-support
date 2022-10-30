import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTicket, reset } from "features/ticket/ticketSlice";
import { ContainerWithBack, Loader, TicketForm } from "components";
import { SectionComment } from "components/Common.styled";
import { useAppDispatch, useAppSelector } from "features/typedRedux";

const NewTicket = () => {
  const { isLoading, isError, isSuccess, message } = useAppSelector((state) => state.ticket);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      dispatch(reset());
      if (isError) toast.error(message);
      if (isSuccess) navigate("/tickets");
    }
  }, [isLoading]);

  const formHandler = (data) => {
    console.log("Form submit: ", data);
    dispatch(createTicket(data));
  };

  const renderMain = () => {
    if (isLoading) return <Loader />;

    return (
      <>
        <SectionComment>Please fill out the form below</SectionComment>
        <TicketForm formHandler={formHandler} />
      </>
    );
  };

  return <ContainerWithBack title="Create New Ticket">{renderMain()}</ContainerWithBack>;
};

export default NewTicket;
