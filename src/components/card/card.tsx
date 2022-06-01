import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { IProject } from "../../interfaces/project";

const Card = (props: IProject) => {
  const { title } = props;
  return (
    <>
      <Typography>{title}</Typography>
    </>
  );
};

export default Card;
