import styled from "styled-components";

//Definir los estilos del Button mediante un template
const ButtonStyled = styled.button`
  background-color: ${({ variant }) =>
    variant === "contained" ? "cadetblue" : "transparent"};
  border: ${({ variant }) => (variant === "text" ? "none" : "4px solid black")};
  width: fit-content;
  font-family: "Helvetica";
  font-size: 1.2rem;
  font-weight: 900;
  color: ${({ color }) => (color ? color : "black")};
  letter-spacing: 3px;
  outline: none;
  padding: 1rem 2rem;
  text-transform: uppercase;
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: cadetblue;
  }
`;

const Button = ({ text, action, variant, color }) => {
  return (
    <ButtonStyled onClick={action} variant={variant} color={color}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
