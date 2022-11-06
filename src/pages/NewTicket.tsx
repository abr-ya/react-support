import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTicket, reset } from "features/ticket/ticketSlice";
import { ContainerWithBack, Loader, TicketForm } from "components";
import { SectionComment } from "components/Common.styled";
import { useAppDispatch, useAppSelector } from "features/typedRedux";

const NewTicket = () => {
  const { isLoading, isError, isSuccess, message } = useAppSelector((state) => state.ticket);
  const [hasSended, setHasSended] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      dispatch(reset());
      if (isError) toast.error(message);
      if (isSuccess) navigate("/tickets");
      setHasSended(false);
    }
  }, [isLoading]);

  const formHandler = (data) => {
    console.log("Form submit: ", data);
    setHasSended(true);
    dispatch(createTicket(data));
  };

  const renderMain = () => {
    if (hasSended && isLoading) return <Loader />;

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
