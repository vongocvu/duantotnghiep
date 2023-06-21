import { ButtonProps } from "@mui/material/Button";

export interface PropsInput extends ButtonProps {
  text: string;
  className: string;
  sx: Object;
  color: string;
  onClick: () => void;
  onChange: () => void;
}
