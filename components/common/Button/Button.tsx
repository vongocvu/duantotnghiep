import Button, { ButtonProps } from "@mui/material/Button";

export interface PropsInput extends ButtonProps {
  text: string;
  className?: string;
  sx?: Object;
  color_?: string;
  onClick?: () => void;
  onChange?: () => void;
}

const Button_ = (props: PropsInput) => {
  return (
    <Button
      color={"primary" || props.color_}
      sx={props.sx}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
};

export default Button_;
