import { useState } from "react";
import Modal from "react-modal";
import { modalStyle } from "./modalStyles";
import { OrangeButton, WhiteButton } from "../../appStyles";

const ContactModal = ({ whiteColor }: { whiteColor: boolean }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

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
        <button onClick={() => setIsOpen(false)}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
};

export default ContactModal;
