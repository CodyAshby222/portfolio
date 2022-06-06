import { useEffect, useState } from "react";
import { useModeContext } from "../../hooks/useContext";
import { Code, CodeLines, codeArray } from "./animationStyles";
import { Row } from "../../appStyles";

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
                    backgroundColor: darkMode ? "#fff" : "#000",
                    width: count < i * 2 - 1 ? 0 : arr[1],
                  }}
                ></CodeLines>
                <CodeLines
                  style={{
                    backgroundColor: darkMode ? "#fff" : "#000",
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

const SkillsAnimation = () => {};

export { HeaderAnimation, SkillsAnimation };
