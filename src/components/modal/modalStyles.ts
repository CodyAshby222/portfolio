import { styled } from "@mui/material/styles";

export const XButton = styled("div")({
  cursor: "pointer",
  fontSize: "1.25rem",
  padding: "0.2rem 1rem",
  marginRight: "-0.75rem",
  marginTop: "-0.25rem",
  color: "#dd0000",
});

export const ErrorMessage = styled("div")({
  fontSize: "0.8rem",
  color: "#dd0000",
  fontWeight: 600,
  marginBottom: "0.5rem",
});

export const ModalForm = styled("form")({
  margin: "0.5rem 0",
});

export const ModalInput = styled("input")({
  fontFamily: "Poppins, sans-serif",
  margin: "0.5rem 0",
  padding: "0.5rem 1rem",
  border: "1px solid rgba(0, 0, 0, 0.2)",
  width: 265,
  borderRadius: 7,
  boxShadow: "-2px 2px 5px rgba(0, 0, 0, 0.1)",
  "&:focus": {
    outline: "none",
  },
});

export const ModalTextArea = styled("textarea")({
  fontFamily: "Poppins, sans-serif",
  margin: "0.5rem 0",
  padding: "0.5rem 1rem",
  border: "1px solid rgba(0, 0, 0, 0.2)",
  width: 265,
  borderRadius: 7,
  height: 100,
  boxShadow: "-2px 2px 5px rgba(0, 0, 0, 0.1)",
  resize: "none",
  "&:focus": {
    outline: "none",
  },
});

export const SocialImage = styled("img")({
  width: 35,
  marginRight: 5,
  marginLeft: 5,
  boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
  borderRadius: "100vh",
  WebkitFilter: "invert(100%)",
  filter: "invert(100%)",
  "&:hover": {
    opacity: 0.9,
  },
});

export const SocialLink = styled("a")({});

export const submitStyle = {
  padding: "0.3rem 1rem",
  width: 120,
  fontWeight: 500,
  marginTop: "0.5rem",
  border: "none",
  fontSize: "1rem",
  fontFamily: "Poppins, sans-serif",
};

export const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    borderRadius: 7,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 50,
  },
};
