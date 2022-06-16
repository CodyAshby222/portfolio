import { useEffect, useState } from "react";
import { IProject } from "../../interfaces/projectInterface";
import {
  CardSection,
  CardTitle,
  CardSubtitle,
  DevGroup,
  DevIcon,
} from "./cardStyles";
import { Link } from "react-router-dom";
import { useModeContext } from "../../hooks/useContext";

const Card = (props: IProject) => {
  const { id, title, subtitle, logo, technologies } = props;
  const { darkMode } = useModeContext();
  const [fullImg, setFullImg] = useState<string>("");
  const [hovered, setHovered] = useState<boolean>(false);
  const toggleHover = () => {
    setHovered((prev) => !prev);
  };

  useEffect(() => {
    title.includes("P&B") && !darkMode
      ? setFullImg(require(`../../assets/images/pbdesign/black-logo.png`))
      : setFullImg(require(`../../assets/images/${logo}`));
  }, [logo, darkMode, title]);

  return (
    <>
      <Link style={{ textDecoration: "none" }} to={`/project/${id}`}>
        <CardSection
          style={{
            backgroundImage: `url(${fullImg})`,
            backgroundColor: darkMode ? "#0d0d0d" : "#f8fafa",
            color: darkMode ? "#fff" : "#000",
            boxShadow: darkMode
              ? "0px 0px 5px rgba(255,255,255, 0.3)"
              : "0px 0px 8px rgba(0,0,0,0.2)",
          }}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          <CardTitle style={{ opacity: `${hovered ? 1 : 0}` }}>
            {title}
          </CardTitle>
          <CardSubtitle style={{ opacity: `${hovered ? 1 : 0}` }}>
            {subtitle}
          </CardSubtitle>
          <DevGroup style={{ opacity: `${hovered ? 1 : 0}` }}>
            {technologies
              ? technologies
                  .filter((t, i) => i < 5)
                  .map((icon, i) => {
                    return (
                      <DevIcon
                        key={`${icon}_${i}`}
                        style={{ color: darkMode ? "#fff" : "#000" }}
                        className={`devicon-${icon}-plain`}
                      ></DevIcon>
                    );
                  })
              : null}
          </DevGroup>
        </CardSection>
      </Link>
    </>
  );
};

export default Card;
