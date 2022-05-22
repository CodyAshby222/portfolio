import { Typography } from "@mui/material";
import { useModeContext } from "../../hooks/useContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useModeContext();
  return (
    <>
      <Typography>THIS IS A NAVBAR</Typography>
      <div onClick={() => setDarkMode(!darkMode)}>Dark Light Toggle</div>
    </>
  );
};

export default Navbar;
