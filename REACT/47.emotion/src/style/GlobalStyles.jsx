import { Global } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global
      styles={(theme) => [
        {
          "*": {
            fontFamily: "Regular",
            boxSizing: "border-box",
          },
          "html,body": {
            padding: 0,
            margin: 0,
            backgroundColor: theme.palette.background,
            color: theme.palette.text,
          },
          a: {
            color: "inherit",
            textDecoration: "none",
          },
          h1: {
            color: theme.palette.title,
          },
        },
        {
          "@font-face": {
            fontFamily: "Regular",
            src: `url(${theme.typography.fonts.regular}) format("truetype")`,
          },
        },
        {
          "@font-face": {
            fontFamily: "Italic",
            src: `url(${theme.typography.fonts.italic}) format("truetype")`,
          },
        },
        {
          "@font-face": {
            fontFamily: "Bold",
            src: `url(${theme.typography.fonts.bold}) format("truetype")`,
          },
        },
        {
          "@font-face": {
            fontFamily: "SemiBold",
            src: `url(${theme.typography.fonts.semibold}) format("truetype")`,
          },
        },
      ]}
    />
  );
};

export default GlobalStyles;
