import { Typography } from "@mui/material";
import { useModeContext } from "../../hooks/useContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useModeContext();
  return (
    <>
      <Typography>Navbar</Typography>
      <Typography onClick={() => setDarkMode(!darkMode)}>
        Dark Light Toggle
      </Typography>
    </>
  );
};

export default Navbar;
