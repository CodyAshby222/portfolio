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
    setFullImg(require(`../../assets/images/${logo}`));
  }, [logo]);

  return (
    <>
      <Link style={{ textDecoration: "none" }} to={`/project/${id}`}>
        <CardSection
          style={{
            backgroundImage: `url(${fullImg})`,
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
                        className={`devicon-${icon}-plain`}
                      ></DevIcon>
                    );
                  })
              : null}
          </DevGroup>
        </CardSection>
        {/* <CardSection
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
              
              <CardDescription>
                {description} tes test test test test test test test test test
                test test test test test test tes tte stest ts te test test
                estes te setes test es test est estes t
              </CardDescription>
              
            </CardInfo>
            <CardImg src={require(`../../assets/images/bifrost/${logo}.jpg`)} />
          </RowSpaceBetween>
        </CardSection> */}
      </Link>
    </>
  );
};

export default Card;
