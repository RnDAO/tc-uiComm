import { Button, ButtonProps } from "@mui/material";
import clsx from "clsx";
import React from "react";

interface IButtonProps extends ButtonProps {
  classes: string;
  label: string;
}
export default function CustomButton({ classes, label, ...rest }: IButtonProps) {
  return (
    <>
      <Button
        className={clsx("py-3 w-full  md:w-[240px] rounded-md text-base", classes)}
        {...rest}
      >
        {label}
      </Button>
    </>
  );
}

CustomButton.defaultProps = {
  disabled: false,
};
