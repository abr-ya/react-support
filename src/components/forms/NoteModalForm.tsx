import { useState } from "react";
import Modal from "react-modal";
import { FormGroup, Textarea } from "components/forms/Form.styled";
import { Btn } from "components/Common.styled";
import { FaPlus } from "react-icons/fa";

const NoteModalForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [noteText, setNoteText] = useState("");

  // Open/close modal
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  // Submit
  const onNoteSubmit = (e) => {
    e.preventDefault();
    console.log(noteText.trim());
    setNoteText("");
    closeModal();
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
        <button onClick={closeModal}>X</button>
        <h2>Add Note</h2>
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
