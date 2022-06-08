import { useModeContext } from "../../hooks/useContext";
import { Circle, ToggleSection } from "./toggleButtonStyles";
import { useState } from "react";

const ToggleButton = () => {
  const { darkMode, setDarkMode } = useModeContext();

  const [changeToggleColor, setChangeToggleColor] = useState(false);

  const changeToggle = () => {
    window.scrollY >= 1
      ? setChangeToggleColor(true)
      : setChangeToggleColor(false);
  };

  window.addEventListener("scroll", changeToggle);
  return (
    <>
      <ToggleSection
        style={{
          backgroundColor: changeToggleColor && !darkMode ? "#000" : "#fff",
        }}
        onClick={() => setDarkMode(!darkMode)}
      >
        <Circle
          style={{
            left: darkMode ? 28 : 4,
            backgroundColor:
              changeToggleColor && !darkMode
                ? "#fff"
                : changeToggleColor && darkMode
                ? "#000"
                : darkMode
                ? "#1E5128"
                : "#275F64",
          }}
        ></Circle>
      </ToggleSection>
    </>
  );
};

export default ToggleButton;
