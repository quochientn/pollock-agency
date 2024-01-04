import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import App from "./App.jsx";
import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: '"Outfit", "Roboto Mono", monospace, sans-serif',
    display1: {
      fontSize: "4.5rem",
      fontWeight: 700,
      lineHeight: 1.083,
    },
    display2: {
      fontSize: "4rem",
      fontWeight: 500,
      lineHeight: 1.125,
    },
    display3: {
      fontSize: "3rem",
      fontWeight: 500,
      lineHeight: 1.167,
    },
    headline1: {
      fontSize: "2.625rem",
      fontWeight: 500,
      lineHeight: 1.19,
    },
    headline2: {
      fontSize: "2.25rem",
      fontWeight: 500,
      lineHeight: 1.278,
    },
    paragraph1: {
      fontSize: "1.125rem",
      fontWeight: 400,
      lineHeight: 1.556,
    },
    paragraph2: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.625,
    },
  },
  palette: {
    pollockAction: {
      actionBlue: "#4F77FF",
      actionPink: "#FFC0EC",
    },
    pollockText: {
      heading: "#2D3958",
      text: "#7B88A8",
      textWhite: "#fff",
      textGrey: "#E7E5EA",
    },
    pollockBackground: {
      dark: "#12022F",
      light: "#F8FAFC",
      alt: "#321370",
      white: "#fff",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <App />
      </>
    </ThemeProvider>
  </React.StrictMode>
);
