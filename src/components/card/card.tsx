import { Typography } from "@mui/material";
import { useEffect } from "react";
import { IProject } from "../../interfaces/projectInterface";
import {
  CardButton,
  CardDescription,
  CardImg,
  CardInfo,
  CardSection,
  CardTitle,
} from "./cardStyles";
import { RowSpaceBetween } from "../../appStyles";
import { Link } from "react-router-dom";

const Card = (props: IProject) => {
  const { id, title, description, img, logo } = props;

  useEffect(() => {
    console.log(img);
  }, [img]);

  return (
    <>
      <CardSection>
        <RowSpaceBetween>
          <CardInfo>
            <CardTitle>{title.toUpperCase()}</CardTitle>
            <CardDescription>
              {description} tes test test test test test test test test test
              test test test test test test tes tte stest ts te test test estes
              te setes test es test est estes t
            </CardDescription>
            <Link style={{ textDecoration: "none" }} to={`/project/${id}`}>
              <CardButton>VIEW PROJECT</CardButton>
            </Link>
          </CardInfo>
          <CardImg src={require(`../../assets/images/bifrost/${logo}.jpg`)} />
        </RowSpaceBetween>
      </CardSection>
    </>
  );
};

export default Card;
