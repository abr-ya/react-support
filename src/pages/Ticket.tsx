import { useEffect } from "react";
import { useParams } from "react-router-dom"; // useNavigate
import { toast } from "react-toastify";
import { setTicketStatus, getTicket } from "features/ticket/ticketSlice";
import { createNote, getNotes } from "features/note/noteSlice"; // resetNotes
import { ContainerWithBack, Loader, NoteModalForm, NotesList, TicketCard } from "components";
import { Btn, SectionComment } from "components/Common.styled";
import { useAppDispatch, useAppSelector } from "features/typedRedux";

const Ticket = () => {
  const { isLoading, isError, message, ticket } = useAppSelector((state) => state.ticket);
  const { notes, isLoading: notesIsLoading } = useAppSelector((state) => state.note);

  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (isError) toast.error(message);

    dispatch(getTicket(id));
    dispatch(getNotes(id));
  }, [isError, message, id]);

  // Close ticket
  const onTicketClose = () => {
    dispatch(setTicketStatus({ id, status: "closed" }));
    toast.success("Ticket Closed");
    // navigate("/tickets");
  };

  // reOpen ticket
  const onTicketOpen = () => {
    dispatch(setTicketStatus({ id, status: "open" }));
    toast.success("Ticket reOpened");
    // navigate("/tickets");
  };

  // create Note
  const createNoteHandler = (text: string) => {
    console.log(`Create note: ${text} for Ticket ${id}`);
    dispatch(createNote({ ticketId: id, text }));
    toast.success(`Create note: ${text} for Ticket ${id}`);
  };

  const renderMain = () => {
    console.log("renderMain", isLoading);
    if (isLoading) return <Loader />;

    if (ticket)
      return (
        <>
          <TicketCard ticket={ticket} />
          <SectionComment>Notes</SectionComment>
          {ticket.status !== "closed" && <NoteModalForm handler={createNoteHandler} />}
          {notesIsLoading ? <Loader /> : <NotesList data={notes} />}
          {ticket.status !== "closed" ? (
            <Btn onClick={onTicketClose}>Close Ticket [to do: danger!]</Btn>
          ) : (
            <Btn onClick={onTicketOpen}>reOpen Ticket</Btn>
          )}
        </>
      );
  };

  return <ContainerWithBack title="Ticket Details">{renderMain()}</ContainerWithBack>;
};

export default Ticket;
