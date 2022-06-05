import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { IProject } from "../../interfaces/projectInterface";
import {
  CardDescription,
  CardImg,
  CardInfo,
  CardSection,
  CardTitle,
  DevIcon,
} from "./cardStyles";
import { RowSpaceBetween, RowCenter } from "../../appStyles";
import { Link } from "react-router-dom";
import { useModeContext } from "../../hooks/useContext";

const Card = (props: IProject) => {
  const { id, title, description, img, logo, technologies } = props;
  const { darkMode } = useModeContext();
  const [hovered, setHovered] = useState<boolean>(false);
  // "&:hover": {
  //   boxShadow: "0px 0px 8px #2A9D8F",
  // },

  const toggleHover = () => {
    setHovered((prev) => !prev);
  };

  return (
    <>
      <Link style={{ textDecoration: "none" }} to={`/project/${id}`}>
        {/* <CardButton>VIEW PROJECT</CardButton> */}
        <CardSection
          style={{
            boxShadow: `0px 0px 8px ${
              hovered && darkMode
                ? "#4E9F3D"
                : hovered && !darkMode
                ? "#2A9D8F"
                : "rgba(0,0,0,0.3)"
            }`,
          }}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          <RowSpaceBetween>
            <CardInfo>
              <CardTitle>{title.toUpperCase()}</CardTitle>
              <CardDescription>
                {description} tes test test test test test test test test test
                test test test test test test tes tte stest ts te test test
                estes te setes test es test est estes t
              </CardDescription>
              <RowCenter>
                {technologies
                  ? technologies.map((icon, i) => {
                      return (
                        <DevIcon
                          key={`${icon}_${i}`}
                          className={`devicon-${icon}-plain colored`}
                        ></DevIcon>
                      );
                    })
                  : null}
              </RowCenter>
            </CardInfo>
            <CardImg src={require(`../../assets/images/bifrost/${logo}.jpg`)} />
          </RowSpaceBetween>
        </CardSection>
      </Link>
    </>
  );
};

export default Card;
