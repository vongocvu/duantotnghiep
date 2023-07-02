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
    large_desktop: true;
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
      mobile: 768,
      tablet: 900,
      laptop: 1024,
      desktop: 1366,
      large_desktop: 1660,
    },
  },

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1660px",
          paddingLeft: "40px", // Khoảng cách bên trái
          paddingRight: "40px", // Khoảng cách bên phải
        },
      },
    },
  },
});

export default theme;
