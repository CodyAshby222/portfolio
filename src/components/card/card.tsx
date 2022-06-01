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

const Card = (props: IProject) => {
  const { title, description, img, logo } = props;

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
            <CardButton>VIEW PROJECT</CardButton>
          </CardInfo>
          <CardImg src={require(`../../assets/images/bifrost/${logo}.jpg`)} />
        </RowSpaceBetween>
      </CardSection>
    </>
  );
};

export default Card;
