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

const GearImg = require("../../assets/images/gear.png");

const HeaderAnimation = () => {
  const { darkMode } = useModeContext();
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let myInterval = setInterval(() => {
      count < 20 ? setCount(count + 1) : setCount(0);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <Code>
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
                    backgroundColor: darkMode ? "#ddd" : "#3F3D56",
                    width: count < i * 2 - 1 ? 0 : arr[1],
                  }}
                ></CodeLines>
                <CodeLines
                  style={{
                    backgroundColor: darkMode ? "#ddd" : "#3F3D56",
                    width: count < i * 2 ? 0 : arr[2],
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

  useEffect(() => {
    let myInterval = setInterval(() => {
      count < 45 ? setCount(count + 1) : setCount(0);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <SkillsCode>
      {skillsCodeArray
        ? skillsCodeArray.map((arr, i) => {
            return (
              <Row key={`${arr[0]}_${i}`}>
                <CodeLines
                  style={{
                    backgroundColor: darkMode ? "#ddd" : "#3F3D56",
                    width: count < i * 3 - 2 ? 0 : arr[0],
                  }}
                ></CodeLines>
                <CodeLines
                  style={{
                    backgroundColor: darkMode ? "#ddd" : "#3F3D56",
                    width: count < i * 3 - 1 ? 0 : arr[1],
                  }}
                ></CodeLines>
                <CodeLines
                  style={{
                    backgroundColor: darkMode ? "#ddd" : "#3F3D56",
                    width: count < i * 3 ? 0 : arr[2],
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
  return (
    <GearGroup style={{ filter: darkMode ? "invert(100%)" : null }}>
      <GearOne src={GearImg} />
      <GearTwo src={GearImg} />
      <GearThree src={GearImg} />
    </GearGroup>
  );
};

export { HeaderAnimation, SkillsAnimation, GearAnimation };
