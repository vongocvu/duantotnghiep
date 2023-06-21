import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const theme = createTheme({
  palette: {
    // Cấu hình màu sắc
    primary: {
      main: "#ffffff",
      dark: "#0d47a1",
    },
    secondary: {
      main: "#fffff",
      dark: "#0d47a1",
    },
  },
  breakpoints: {
    values: {
      mobile: 767,
      tablet: 1024,
      laptop: 1300,
      desktop: 1770,
    },
  },

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1770px",
          paddingLeft: "40px", // Khoảng cách bên trái
          paddingRight: "40px", // Khoảng cách bên phải
        },
      },
    },
  },
});

export default theme;
