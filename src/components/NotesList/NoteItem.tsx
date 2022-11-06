import { useAppSelector } from "features/typedRedux";
import { INote } from "interfaces";
import { date2ru } from "utils";
import { Note, DateText } from "./Note.styled";

interface INoteItem {
  note: INote;
}

const NoteItem = ({ note }: INoteItem) => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Note staff={note.isStaff}>
      <h4>Note from {note.isStaff ? <span>Staff</span> : <span>{user.name}</span>}</h4>
      <p>{note.text}</p>
      <DateText>{date2ru(note.createdAt)}</DateText>
    </Note>
  );
};

export default NoteItem;
