import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export const Breakpoints = () => {
  const theme = useTheme();

  const Mobile_ = useMediaQuery(theme.breakpoints.up("mobile"));

  const Tablet_ = useMediaQuery(theme.breakpoints.up("tablet"));

  const Laptop_ = useMediaQuery(theme.breakpoints.up("laptop"));

  const Desktop_ = useMediaQuery(theme.breakpoints.up("desktop"));

  return {
    Mobile_,
    Tablet_,
    Laptop_,
    Desktop_,
  };
};
