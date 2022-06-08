import { useModeContext } from "../../hooks/useContext";
import { Circle, ToggleSection } from "./toggleButtonStyles";

const ToggleButton = () => {
  const { darkMode, setDarkMode } = useModeContext();
  return (
    <>
      <ToggleSection onClick={() => setDarkMode(!darkMode)}>
        <Circle
          style={{
            left: darkMode ? 27 : 3,
          }}
        ></Circle>
      </ToggleSection>
    </>
  );
};

export default ToggleButton;
