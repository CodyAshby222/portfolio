import { useState, useRef } from "react";
import Modal from "react-modal";
import {
  ModalForm,
  ModalInput,
  modalStyle,
  ModalTextArea,
  submitStyle,
  XButton,
} from "./modalStyles";
import { OrangeButton, RowSpaceBetween, WhiteButton } from "../../appStyles";
import { Typography } from "@mui/material";
// import emailjs from "emailjs-com";

const ContactModal = ({ whiteColor }: { whiteColor: boolean }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const form: any = useRef();

  const sendInfo = (e: any) => {
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     "pb-service",
    //     "pb-template",
    //     form.current,
    //     "user_FLHBRJsIG3yyUO1b8QgB1"
    //   )
    //   .then(
    //     (result: any) => {
    //       console.log(result.text);
    //       setIsModal(true);
    //       e.target.reset();
    //     },
    //     (error: any) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <div>
      {whiteColor ? (
        <WhiteButton onClick={() => setIsOpen(true)}>LET'S CHAT</WhiteButton>
      ) : (
        <OrangeButton onClick={() => setIsOpen(true)}>LET'S CHAT</OrangeButton>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={modalStyle}
        contentLabel="Example Modal"
      >
        <RowSpaceBetween>
          <Typography variant="h5" style={{ fontWeight: 600 }}>
            GET IN TOUCH
          </Typography>
          <XButton onClick={() => setIsOpen(false)}>x</XButton>
        </RowSpaceBetween>
        <ModalForm ref={form} onSubmit={sendInfo}>
          <Typography
            style={{
              fontSize: "0.75rem",
              padding: "0 0.25rem 0.75rem 0.25rem",
            }}
          >
            Like what you see? Let's work together!
          </Typography>
          <ModalInput name="name" type="text" placeholder="Name *" required />
          <ModalInput
            name="email"
            type="email"
            placeholder="Email *"
            required
          />
          <ModalTextArea name="message" placeholder="Message *" required />
          <OrangeButton style={submitStyle}>SUBMIT</OrangeButton>
        </ModalForm>
      </Modal>
    </div>
  );
};

export default ContactModal;
