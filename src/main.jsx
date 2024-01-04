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
    link: {
      fontSize: "0.9375rem",
      fontWeight: 500,
      lineHeight: 1.6,
      textTransform: "uppercase",
    },
  },

  palette: {
    pollockAction: {
      actionBlue: "var(--color-action-blue)",
      actionPink: "var(--color-action-pink)",
    },
    pollockText: {
      heading: "var(--color-text-heading)",
      text: "var(--color-text-text)",
      textWhite: "var(--color-text-text-white)",
      textGrey: "var(--color-text-text-grey)",
    },
    pollockBackground: {
      dark: "var(--color-background-dark)",
      light: "var(--color-background-light)",
      alt: "var(--color-background-alt)",
      lightAlt: "var(--color-background-light-alt)",
      white: "var(--color-background-white)",
      grey: "var(--color-background-grey)",
    },
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "buttonBig" },
          style: {
            padding: "0.8rem 2rem",
            borderRadius: "5px",
            backgroundColor: "var(--color-action-blue)",
            color: "var(--color-text-text-white)",
            "&:hover": {
              backgroundColor: "var(--color-action-dark-blue)",
            },
          },
        },
      ],
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
