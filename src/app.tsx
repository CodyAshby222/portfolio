import { useState } from "react";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { DarkModeContext } from "./hooks/useContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Project from "./pages/project/project";

// https://dev.to/madv/usecontext-with-typescript-23ln

const App = () => {
  // const { darkMode, setDarkMode } = useModeContext();
  const [darkMode, setDarkMode] = useState<boolean>(false);
  // const theme = useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode,
  //       },
  //     }),
  //   [mode]
  // );

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {/* <ThemeProvider theme={theme}> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="project/:projectId" element={<Project />} />
        </Routes>
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </DarkModeContext.Provider>
  );
};

export default App;
