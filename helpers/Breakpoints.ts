import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export const Breakpoints = () => {
  const theme = useTheme();

  const Mobile_ = useMediaQuery(theme.breakpoints.down("mobile"));

  const Tablet_ = useMediaQuery(theme.breakpoints.down("tablet"));

  const Laptop_ = useMediaQuery(theme.breakpoints.down("laptop"));

  const Desktop_ = useMediaQuery(theme.breakpoints.down("desktop"));

  const LargeDesktop_ = useMediaQuery(theme.breakpoints.down("large_desktop"));

  const MoreScreen_ = useMediaQuery(theme.breakpoints.up("large_desktop"));

  return {
    Mobile_,
    Tablet_,
    Laptop_,
    Desktop_,
    LargeDesktop_,
    MoreScreen_,
  };
};
