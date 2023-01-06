import { useState } from "react";
import Modal from "react-modal";
import { Close, FormGroup, Textarea } from "components/forms/Form.styled";
import { Btn, SectionHeader } from "components/Common.styled";
import { FaPlus } from "react-icons/fa";

interface INoteModalForm {
  handler: (text: string) => void;
}

const NoteModalForm = ({ handler }: INoteModalForm) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [noteText, setNoteText] = useState("");

  // Open/close modal
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  // Submit
  const onNoteSubmit = (e) => {
    e.preventDefault();
    const text = noteText.trim();
    // проверка лишняя из-за дизейбла кнопки, но лучше пусть будет)
    if (text) {
      console.log("создать заметку", text);
      handler(text);
      setNoteText("");
      closeModal();
    }
  };

  // Modal Start
  const customStyles = {
    content: {
      width: "600px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      position: "relative",
    },
  };

  Modal.setAppElement("#root");

  return (
    <>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Add Note">
        <Close onClick={closeModal}>X</Close>
        <SectionHeader>Add Note</SectionHeader>
        <form onSubmit={onNoteSubmit}>
          <FormGroup>
            <Textarea
              name="noteText"
              id="noteText"
              className="form-control"
              placeholder="Note text"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            ></Textarea>
          </FormGroup>
          <FormGroup>
            <Btn type="submit" disabled={!noteText.trim()}>
              Submit
            </Btn>
          </FormGroup>
        </form>
      </Modal>
      <Btn onClick={openModal}>
        <FaPlus /> Add Note
      </Btn>
    </>
  );
};

export default NoteModalForm;
