import React, { useMemo } from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const getStylesFromVariant = (theme, variant = "default") => ({
  outline: "none",
  cursor: variant ? "pointer" : "default",
  margin: theme.spacing(1.5),
  padding: theme.spacing(1.5, 3),
  "& > *": {
    fontFamily: "SemiBold",
    letterSpacing: 1,
    fontSize: theme.spacing(1.5),
  },
  backgroundColor:
    variant === "error"
      ? theme.palette.alert.error
      : variant === "success"
      ? theme.palette.alert.success
      : variant === "warning"
      ? theme.palette.alert.warning
      : theme.palette.button.background,
  color: theme.palette.button.text,
  border: `1px solid ${theme.palette.button.border}`,
  "&:hover": {
    backgroundColor: theme.palette.button.border,
  },
});

//OCULTAR LAS PROPS
const PROPS_SHOULD_BE_HIDDEN = ["variant"];

const ButtonWrapper = styled("button", {
  shouldForwardProp: (prop) => !PROPS_SHOULD_BE_HIDDEN.includes(prop),
})(({ variant }) => ({
  ...variant,
}));

const Button = ({ children, variant = "default" }) => {
  const theme = useTheme();
  const variantMemo = useMemo(
    () => getStylesFromVariant(theme, variant),
    [theme, variant]
  );
  return <ButtonWrapper variant={variantMemo}>{children}</ButtonWrapper>;
};

export default Button;
