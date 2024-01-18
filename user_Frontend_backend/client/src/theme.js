// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7b1fa2", // Set your primary color here
    },
    secondary: {
      main: "#ffd200", // Set your secondary color here
    },
    danger: {
      main: "#d32f2f", // Set your secondary color here
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default theme;
