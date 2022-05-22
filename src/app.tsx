import { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { DarkModeContext } from "./hooks/useContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Project from "./pages/project/project";

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          background: {
            default: "#666666",
          },
        },
      }),
    [darkMode]
  );

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:projectId" element={<Project />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};

export default App;
