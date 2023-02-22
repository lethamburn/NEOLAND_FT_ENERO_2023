import styled from "styled-components";

const H1 = styled.h1`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 800;
  letter-spacing: 2px;
  font-size: ${({ size }) =>
    size === "xl"
      ? "2.81rem"
      : size === "lg"
      ? "2.11rem"
      : size === "md"
      ? "1.58rem"
      : "1rem"};
`;

const H2 = styled.h2`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 800;
  letter-spacing: 2px;
  font-size: ${({ size }) =>
    size === "xl"
      ? "2.81rem"
      : size === "lg"
      ? "2.11rem"
      : size === "md"
      ? "1.58rem"
      : "1rem"};
`;

const H3 = styled.h3`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 800;
  letter-spacing: 2px;
  font-size: ${({ size }) =>
    size === "xl"
      ? "2.81rem"
      : size === "lg"
      ? "2.11rem"
      : size === "md"
      ? "1.58rem"
      : "1rem"};
`;

const Heading = ({ children, size, as }) => {
  if (as === "h1") {
    return <H1 size={size}>{children}</H1>;
  } else if (as === "h2") {
    return <H2 size={size}>{children}</H2>;
  } else if (as === "h3") {
    return <H3 size={size}>{children}</H3>;
  } else {
    return <H2 size={size}>{children}</H2>;
  }
};

export default Heading;
