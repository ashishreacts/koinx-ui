import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ThemeProvider, createTheme } from "@mui/material";
import { lightThemeOptions } from "./lightThemeOptions";

function App() {
  return (
    <ThemeProvider theme={createTheme(lightThemeOptions)}>
      <BrowserRouter>
        <HelmetProvider>
          <AppRoutes />
        </HelmetProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
