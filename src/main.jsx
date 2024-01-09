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
      fontWeight: 500,
      lineHeight: 1.083,
      letterSpacing: "-2px",
    },
    display2: {
      fontSize: "4rem",
      fontWeight: 500,
      lineHeight: 1.125,
      letterSpacing: "-2px",
    },
    display3: {
      fontSize: "3rem",
      fontWeight: 500,
      lineHeight: 1.167,
      letterSpacing: "-2px",
    },
    headline1: {
      fontSize: "2.625rem",
      fontWeight: 500,
      lineHeight: 1.19,
      letterSpacing: "-0.84px",
    },
    headline2: {
      fontSize: "2.25rem",
      fontWeight: 500,
      lineHeight: 1.278,
      letterSpacing: "-1px",
    },
    headline3: {
      fontSize: "1.375rem",
      fontWeight: 400,
      lineHeight: 1.455,
      letterSpacing: "-1px",
    },
    headline4: {
      fontSize: "1.125rem",
      fontWeight: 500,
      lineHeight: 1.556,
      letterSpacing: "0.4px",
    },
    paragraph1: {
      fontSize: "1.125rem",
      fontWeight: 400,
      lineHeight: 1.556,
      letterSpacing: "-0.3px",
    },
    paragraph2: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.625,
    },
    paragraph3: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.714,
      letterSpacing: "-0.3px",
    },
    link: {
      fontSize: "0.9375rem",
      fontWeight: 500,
      lineHeight: 1.6,
      textTransform: "uppercase",
      letterSpacing: "-0.3px",
    },
  },

  palette: {
    pollockAction: {
      blue: "var(--color-action-blue)",
      pink: "var(--color-action-pink)",
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
