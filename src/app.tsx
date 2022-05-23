import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { DarkModeContext } from "./hooks/useContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Project from "./pages/project/project";
import { DarkTheme, LightTheme } from "./appStyles";

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
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
