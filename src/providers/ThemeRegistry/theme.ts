import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#C9D3E8",
      main: "#637885",
      dark: "#303540",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#85C1E9",
      main: "#5DADE2",
      dark: "#3498DB",
    },
    text: {
      primary: "#000000",
      secondary: "#5DADE2",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
