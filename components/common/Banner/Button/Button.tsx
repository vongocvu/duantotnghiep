import React from "react";
import styled from "@emotion/styled";
import { ButtonProps } from "@mui/material/Button";

export interface PropsInput extends ButtonProps {
  text: string;
  className?: string;
  sx?: Object;
  startIcon?: React.ReactNode;
  color_?: string;
  onClick?: () => void;
  onChange?: () => void;
}

const MyButton_ = styled.button`
  padding: 15px 20px;
  color: black;
  border-radius: 5px;
  display: flex;
  font-weight: 500;
`;

const Button_ = (props: PropsInput) => {
  return (
    <MyButton_
      className={props.className}
      color={"primary" || props.color_}
      onClick={props.onClick}
      style={props.sx}
    >
      {props.startIcon}
      {props.text}
    </MyButton_>
  );
};

export default Button_;
