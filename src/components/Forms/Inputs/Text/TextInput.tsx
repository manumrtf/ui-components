import React, { Fragment } from "react";
import { Input, Label } from "./styles";
import { theme } from "../../../themes";
import { shapedComponentsProps } from "../../../commonInterfaces/shapedComponents";
export interface TextInputProps extends shapedComponentsProps {
  label?: string;
}
export const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <Fragment>
      {props.label && <Label>{props.label}</Label>}
      <Input {...props}></Input>
    </Fragment>
  );
};

TextInput.defaultProps = {
  theme: theme,
};