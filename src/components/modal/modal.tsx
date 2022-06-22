import { useState, useRef } from "react";
import Modal from "react-modal";
import {
  ErrorMessage,
  ModalForm,
  ModalInput,
  modalStyle,
  ModalTextArea,
  SocialImage,
  SocialLink,
  submitStyle,
  XButton,
} from "./modalStyles";
import {
  OrangeButton,
  OrangeSubmit,
  RowCenter,
  RowSpaceBetween,
  WhiteButton,
} from "../../appStyles";
import { Box, Typography } from "@mui/material";
import emailjs from "emailjs-com";

const EmailImg = require("../../assets/icons/email-icon.png");
const LinkedInImg = require("../../assets/icons/linkedin-icon.png");
const GitHubImg = require("../../assets/icons/github-icon.png");

const ContactModal = ({ whiteColor }: { whiteColor: boolean }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [thankYou, setThankYou] = useState(false);
  const [error, setError] = useState(false);
  const form: any = useRef();

  const sendInfo = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE!,
        process.env.REACT_APP_TEMPLATE!,
        form.current,
        process.env.REACT_APP_KEY!
      )
      .then(
        (result: any) => {
          setIsOpen(false);
          setThankYou(true);
          setError(false);
          e.target.reset();
        },
        (error: any) => {
          setError(true);
        }
      );
  };

  return (
    <>
      {whiteColor ? (
        <WhiteButton onClick={() => setIsOpen(true)}>LET'S CHAT</WhiteButton>
      ) : (
        <OrangeButton onClick={() => setIsOpen(true)}>LET'S CHAT</OrangeButton>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={modalStyle}
        ariaHideApp={false}
        contentLabel="Contact Modal"
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
              fontSize: "0.8rem",
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
          {error ? (
            <ErrorMessage>
              Please try again or contact me through email.
            </ErrorMessage>
          ) : null}
          <OrangeSubmit type="submit" value="SUBMIT" style={submitStyle} />
        </ModalForm>
      </Modal>
      <Modal
        isOpen={thankYou}
        onRequestClose={() => setThankYou(false)}
        style={modalStyle}
        ariaHideApp={false}
        contentLabel="Thank You Modal"
      >
        <RowSpaceBetween>
          <Box></Box>
          <XButton onClick={() => setThankYou(false)}>x</XButton>
        </RowSpaceBetween>
        <Box style={{ textAlign: "center" }}>
          <Typography
            style={{ marginTop: "-1.5rem", fontWeight: 600 }}
            variant="h5"
          >
            THANK YOU
          </Typography>
          <Typography style={{ fontSize: "0.8rem", margin: "0.5rem 0" }}>
            Your message has been recieved and I will be contacting you shortly
            to follow-up.
          </Typography>
          <RowCenter style={{ marginTop: "1rem" }}>
            <SocialLink href="mailto:cashby220@gmail.com">
              <SocialImage src={EmailImg} />
            </SocialLink>
            <SocialLink
              target="_blank"
              href="https://www.linkedin.com/in/cody-ashby-240b381b8"
            >
              <SocialImage src={LinkedInImg} />
            </SocialLink>
            <SocialLink target="_blank" href="https://github.com/CodyAshby222">
              <SocialImage src={GitHubImg} />
            </SocialLink>
          </RowCenter>
        </Box>
      </Modal>
    </>
  );
};

export default ContactModal;
