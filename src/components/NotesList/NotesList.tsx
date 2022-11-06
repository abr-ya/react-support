import { INote } from "interfaces";
import { Wrapper } from "./Note.styled";
import NoteItem from "./NoteItem";

interface INotesList {
  data: INote[];
}

const NotesList = ({ data }: INotesList) => (
  <Wrapper>
    {data?.length ? (
      <>
        {data.map((note) => (
          <NoteItem key={note._id} note={note} />
        ))}
      </>
    ) : (
      <span>This ticket have not any notes.</span>
    )}
  </Wrapper>
);

export default NotesList;
