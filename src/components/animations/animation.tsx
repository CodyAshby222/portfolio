import { useEffect, useState } from "react";
import { useModeContext } from "../../hooks/useContext";
import {
  Code,
  CodeLines,
  codeArray,
  SkillsCode,
  skillsCodeArray,
  GearOne,
  GearTwo,
  GearThree,
  GearGroup,
} from "./animationStyles";
import { Row } from "../../appStyles";
import { useMediaQuery } from "@mui/material";

const GearImg = require("../../assets/images/gear.png");

const HeaderAnimation = () => {
  const { darkMode } = useModeContext();
  const [count, setCount] = useState<number>(0);
  const tablet = useMediaQuery("(max-width:800px)");

  useEffect(() => {
    let myInterval = setInterval(() => {
      count < 20 ? setCount(count + 1) : setCount(0);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <Code style={{ top: tablet ? 91 : 126, left: tablet ? 175 : 268 }}>
      {codeArray
        ? codeArray.map((arr, i) => {
            return (
              <Row
                key={`${arr[1]}_${i}`}
                style={{
                  marginLeft: arr[0],
                }}
              >
                <CodeLines
                  style={{
                    margin: !tablet ? "5px 3px 0px 3px" : "3px 1px 0px 1px",
                    backgroundColor: darkMode ? "#ddd" : "#3F3D56",
                    width:
                      count < i * 2 - 1 ? 0 : !tablet ? arr[1] : arr[1] * 0.65,
                  }}
                ></CodeLines>
                <CodeLines
                  style={{
                    margin: !tablet ? "5px 3px 0px 3px" : "3px 1px 0px 1px",
                    backgroundColor: darkMode ? "#ddd" : "#3F3D56",
                    width: count < i * 2 ? 0 : !tablet ? arr[2] : arr[2] * 0.65,
                  }}
                ></CodeLines>
              </Row>
            );
          })
        : null}
    </Code>
  );
};

const SkillsAnimation = () => {
  const { darkMode } = useModeContext();
  const [count, setCount] = useState<number>(0);
  const tablet = useMediaQuery("(max-width:800px)");

  useEffect(() => {
    let myInterval = setInterval(() => {
      count < 45 ? setCount(count + 1) : setCount(0);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <SkillsCode style={{ top: tablet ? 133 : 176, left: tablet ? 125 : 172 }}>
      {skillsCodeArray
        ? skillsCodeArray.map((arr, i) => {
            return (
              <Row key={`${arr[0]}_${i}`}>
                <CodeLines
                  style={{
                    margin: !tablet ? "5px 3px 0px 3px" : "3px 1px 0px 1px",
                    backgroundColor: darkMode ? "#ddd" : "#3F3D56",
                    width:
                      count < i * 3 - 2 ? 0 : !tablet ? arr[0] : arr[0] * 0.75,
                  }}
                ></CodeLines>
                <CodeLines
                  style={{
                    margin: !tablet ? "5px 3px 0px 3px" : "3px 1px 0px 1px",
                    backgroundColor: darkMode ? "#ddd" : "#3F3D56",
                    width:
                      count < i * 3 - 1 ? 0 : !tablet ? arr[1] : arr[1] * 0.75,
                  }}
                ></CodeLines>
                <CodeLines
                  style={{
                    margin: !tablet ? "5px 3px 0px 3px" : "3px 1px 0px 1px",
                    backgroundColor: darkMode ? "#ddd" : "#3F3D56",
                    width: count < i * 3 ? 0 : !tablet ? arr[2] : arr[2] * 0.75,
                  }}
                ></CodeLines>
              </Row>
            );
          })
        : null}
    </SkillsCode>
  );
};

const GearAnimation = () => {
  const { darkMode } = useModeContext();
  const tablet = useMediaQuery("(max-width:800px)");
  return (
    // @ts-ignore
    <GearGroup style={{ filter: darkMode ? "invert(100%)" : null }}>
      <GearOne
        style={{
          top: tablet ? 40 : 30,
          left: tablet ? 155 : 200,
          width: tablet ? 45 : 70,
        }}
        src={GearImg}
      />
      <GearTwo
        style={{
          top: tablet ? 20 : 10,
          left: tablet ? 200 : 285,
          width: tablet ? 30 : 40,
        }}
        src={GearImg}
      />
      <GearThree
        style={{
          top: tablet ? 60 : 70,
          left: tablet ? 215 : 300,
          width: tablet ? 30 : 50,
        }}
        src={GearImg}
      />
    </GearGroup>
  );
};

export { HeaderAnimation, SkillsAnimation, GearAnimation };
